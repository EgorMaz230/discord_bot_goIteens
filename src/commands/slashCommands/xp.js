const { SlashCommandBuilder } = require("discord.js");
const Level = require("../../models/Level");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('xp')
        .setDescription("Shows your/someone's xp.")
        .addUserOption(option => 
            option
                .setName('target-user')
                .setDescription('The user whose xp you want to see')
                .setRequired(false)
        ),

    async execute(interaction) {
        if(!interaction.inGuild()){
            interaction.reply("You can't run this command inside a server");
            return;
        }

        await interaction.deferReply();

        const mentionedUserId = interaction.options.get('target-user')?.value;
        const targetUserId = mentionedUserId || interaction.member.id;
        const targetUserObj = await interaction.guild.members.fetch(targetUserId)

        const fetchedLevel = await Level.findOne({ 
            userId: targetUserId,
            guildId: interaction.guild.id,
        });

        if(!fetchedLevel){
            interaction.editReply(
                mentionedUserId ? `${targetUserObj.user.tag} doesn't have any xp yet. Try again when they chat a little more` : `You don't have any xp yet. Chat a little more and try again`
            );
            return;
        }

        await interaction.editReply(`Your xp is ${fetchedLevel.xp}, Your level is ${fetchedLevel.level} `)
       
        
   
        if(!interaction.inGuild()){
            interaction.reply("You can't run this command inside a server");
            return;
        }

        // await interaction.deferReply();

     


       
    }


    }
    
