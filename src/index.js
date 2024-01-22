const {
    Client,
    GatewayIntentBits,
    Guild,
    Routes,
    Events,
    Collection,
} = require("discord.js");
const { config } = require("dotenv");
const accrualPoints = require("./utils/messages.js");
const getMembersInVoiceChanel = require("./utils/voicechanel.js");

// >>>>>>> main
const { default: mongoose } = require("mongoose");
const Level = require("./models/Level");

// const { REST } = require( "@discordjs/rest");
const fs = require("node:fs");
const path = require("node:path");

config();

const TOKEN = process.env.TOKEN;
// const CLIENT_ID = process.env.CLIENT_ID;
// const GUILD_ID = process.env.GUILD_ID;

const { MongoClient } = require("mongodb");

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = "messages";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates,
    ],
});

// const rest = new REST({ version: "10" }).setToken(TOKEN);

client.commands = new Collection();

const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs
        .readdirSync(commandsPath)
        .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ("data" in command && "execute" in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(
                `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
            );
        }
    }
}

client.on("ready", async() => {
    console.log(`${client.user.tag} is online`);
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB");
    } catch (error) {
        console.log(`There was an error whil connecting to database ${error}`);
    }
});

// <<<<<<< top
client.on(Events.InteractionCreate, async(interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const currentUsers = await Level.find({ userId: interaction.user.id });
    // console.log(currentUsers)

    if (currentUsers.length === 0) {
        const newUser = new Level({
            userId: interaction.user.id,
            guildId: interaction.guild.id,
            xp: 0,
            level: 1,
        });
        console.log("some");
        // console.log(await newUser.save())
        await newUser.save();
    }

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found`);
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: "There was an error while executing this command!",
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: "There was an error while executing this command!",
                ephemeral: true,
            });
        }
    }
});

//todo: Обробник подій який додає бали за повідомлення довші за 3 літери
client.on("messageCreate", accrualPoints);

//todo: Nitro boost event
client.on(Events.GuildMemberUpdate, (oldMember, newMember) => {
    if (oldMember.roles.cache.size !== newMember.roles.cache.size) {
        if (!oldMember.roles.cache.has("1192072016866574386") &&
            newMember.roles.cache.has("1192072016866574386")
        ) {
            client.guilds.cache
                .first()
                .systemChannel.send(`Boost event by <@${newMember.user.id}>`);
        }
    }
});

// todo: Обробник подій який додає бали якщо у голосову чаті присутні щонайменше четверо осіб
// client.on("ready", (interaction) => getMembersInVoiceChanel(interaction));

// Кодд Олександра >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const messages = require("./models/messages.js");

// client.on("ready", async() => {
//     try {
//         // Створення та підключення до об'єкта MongoDB
//         const dbClient = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//         await dbClient.connect();
//         console.log('Connected to DB');

//         // Призначте dbClient глобальній змінній, щоб можна було його використовувати в інших частинах коду
//         global.dbClient = dbClient;
//     } catch (error) {
//         console.log(`There was an error while connecting to the database: ${error}`);
//     }
// });

// ...

const spamCooldown = 60000; // період часу для визначення спаму в мілісекундах (тут 60 секунд)
const maxSameMessages = 3; // максимальна кількість однакових повідомлень для спаму

const userCooldowns = new Map();

client.on("messageCreate", async(message) => {
    if (message.author.bot) return;

    const userId = message.author.id;
    const content = message.content;

    try {
        // Збереження нового повідомлення в базу даних
        const newMessage = new messages({
            userId: userId,
            message: content,
        });
        await newMessage.save();
        console.log(`Користувач написав: ${content}`);

        const countOfSameMessages = await messages.countDocuments({
            userId: userId,
            message: content,
        });

        // Перевірка на спам за інтервалом часу
        if (userCooldowns.has(userId)) {
            const timeDiff = Date.now() - userCooldowns.get(userId);
            if (timeDiff < spamCooldown && countOfSameMessages >= maxSameMessages) {
                // Якщо користувач відправляє більше 3 однакових повідомлень за короткий інтервал часу, зменшуємо його досвід
                const userLevel = await Level.findOne({ userId });
                if (userLevel !== null) {
                    const exp = userLevel.xp - 1;
                    await Level.updateOne({ userId: userId }, { xp: exp });
                    console.log(`Зменшено досвід користувача ${userId} через спам.`);
                    message.reply(
                        `Ви відправили ${countOfSameMessages} однакових повідомлень. Зменшено XP через спам`
                    );
                }
                return;
            }
        }



        // Оновлюємо час останнього відправленого повідомлення для користувача
        userCooldowns.set(userId, Date.now());
    } catch (error) {
        console.error("Помилка при збереженні:", error);
    }
});
client.on("messageCreate", async(message) => {

    if (message.author.bot || !message.content) return;

    // Перевірка, чи є прикріплені файли (фото)
    if (message.attachments.size > 0) {

        message.reply("Вам не нараховано XP через відправлене фото.");

        const userId = message.author.id;
        const userLevel = await Level.findOne({ userId });
        if (userLevel !== null) {
            const exp = userLevel.xp - 1;
            await Level.updateOne({ userId: userId }, { xp: exp });
            console.log(`Зменшено XP користувача ${userId} через відправлене фото.`);
        }

        return;
    }


});
client.on("messageDelete", async msg => {
    const id = msg.author.id;
    Level.findOne({ userId: id })
        .exec()
        .then((op) => {
            if (op !== null) {
                let exp = op.xp - 1;
                Level.updateOne({ userId: id }, { xp: exp }).then();
            }
        });
});
client.login(TOKEN);