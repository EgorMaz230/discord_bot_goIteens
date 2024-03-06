<div style="border-bottom: 1px solid #eee" align="center">
    <h3 align="center"><a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Montserrat&weight=500&size=33&pause=1000&color=F8F7FD&repeat=false&random=false&width=160&lines=BotName" alt="Typing SVG" /></a></h3>
        <a href="https://github.com/EgorMaz230/discord_bot_goIteens/graphs/contributors" >
          <img src="https://contrib.rocks/image?repo=EgorMaz230/discord_bot_goIteens"  />
        </a>
        <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=22&pause=1000&color=EEEEEE&background=0F09FF00&center=true&vCenter=true&multiline=true&repeat=false&random=false&width=910&height=100&lines=BotName+-+%D1%86%D0%B5+%D0%B4%D1%96%D1%81%D0%BA%D0%BE%D1%80%D0%B4+%D0%B1%D0%BE%D1%82+%D1%81%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%B8%D0%B9+%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BE%D1%8E+%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D1%85+%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BD%D0%B8%D0%BA%D1%96%D0%B2%E2%8F%AB" alt="Typing SVG" /></a>
</div>

<h2 align="center" style="border-bottom: none"><i>Швидко знайти потрібну інформацію ви можете тут:</i></h2>

- [Основна інформація](#general-information)
* [Як запустити бота?](#startBot)
* [Технології, які використовувались](#technologies-used)
* [Можливості боту](#abilities)
* [Команди боту](#commands)

<div>
    <h2 id="general-information">Основна інформація</h2>

<img src="https://cdn.discordapp.com/avatars//67e01b864865bb1cf7cd0d2acb9356b2.png?size=256" align="right" vertical-align="center">

<p style="font-size: 1.15em;">
BotName - це бот який вміє виконувати адміністративні функції і має систему рівнів та XP, які нараховуються за спілкування на сервері. Зокрема мутити за спам та нецензурні слова, нараховувати XP за повідомлення, за участь у голосовому каналі, за буст серверу, за запрошення нового учасника серверу <i>(умова - Ви повинні бути на сервері більш ніж місяць)</i>, та навіть за участь у трибуні, все це в компетенції нашого боту.
        </p>
        <p>Інформація або фото надані тут можуть трохи відрізнятися від реальності. Наша команда намагається якомога швидше оновлювати документацію при оновленнях, але краще перевіряйте роботу додатку безпосередньо на Discord сервері</p>
    <p style="font-size: 1.1em;"> Невеличкий спойлер: планується додати вебінтерфейс до BotName, а це означає що дуже скоро Ви матимете широкі можливості для налаштування боту саме під Ваш діскорд сервер😉</p>

> Бот створений за підтримки академії GoITeens🤝
</div>
<div>
    <h2 id="startBot">Як запустити бота?</h2>
    <p>Щоб виконати ці команди Вам необхідно мати встановлений <a href="https://git-scm.com/downloads">Git</a></p>
    <code>git clone https://github.com/EgorMaz230/discord_bot_goIteens.git</code>
    <p>*Склонує цей репозиторій до вашого пристрою</p>
<code>cd discord_bot_goIteens</code>
    <p>*Перейде в потрібну вам директорію <i>(папку)</i></p>
<code>npm install</code>
    <p>*Встановить всі необхідні для роботи боту пакети</p>
    <b>Перед наступною командою переконайтеся що у Вас є файл <code>.env</code> на найвищому рівні папки та у ньому прописані властивості <code>TOKEN</code>, <code>MONGODB_URI</code>, <code>GUILD_ID</code> та <code>CLIENT_ID</code>. У разі відсутності цього файлу або деяких властивостей в консолі виведеться помилка</b>
    <br><br>
<code>npm start</code>
    <p>*Запускає BotName</p>
</div>
<div>
    <h2 id="technologies-used">Технології, які використовувались</h2>

<div align="center">
<img src="https://img.shields.io/badge/node.js-%2344883e?style=for-the-badge&logo=node.js&labelColor=black" style="margin-right: 1.1em" />
        
<img src="https://img.shields.io/badge/discord.js%20v14-%231e2124?style=for-the-badge&logo=discord&labelColor=black" style="margin-right: 1.1em"  />

<img src="https://img.shields.io/badge/mongoDB-%233FA037?style=for-the-badge&logo=mongoDB&labelColor=black" />
</div>

<p style="font-size: 1.1em;">Також у цьому проєкті використовувались додаткові технології у вигляді пакетів. Ознайомитися з ними можна у <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/package.json">package.json</a></p>

<i>Примітка: MongoDB використовується для бази даних за допомогою якої саме було реалізовано систему рівнів🍃</i>

</div>

<div>
    <h2 id="abilities">Можливості боту</h2>
    <p style="font-size: 1.1em;">Майже всі функції додають XP у властивість <code>currentXp</code>. Кожного дня о 12 годині ночі <code>currentXp</code> обнуляється, а досвід додається у властивість <code>XP</code></p>
    <h3 style="border-bottom: none"><i>Навігація</i></h3>

* [Додавання балів за спілкування у чаті💬](#xpForMessage)
* [Антиспам💢](#antispam)
* [Додавання балів за запрошення користувачів на сервер📩](#xpForInvitesmmands)
* [Додавання балів за спілкування у голосовому чаті🗣](#xpForVoice)
* [Додавання балів за буст серверу☂](#xpForBoost)
* [Формує щомісячний рейтинг найактивніших учасників серверу📜](#monthRating)
* [Додавання учасника до бази даних 🗂️](#addNewMember)
* [Мут за нецензурну лексику ⛔](#badWords)
* [Ліміт балів на добу⌛](#limitPoints)

<ul>
       <li>
            <h3 id="xpForMessage">Додавання балів за спілкування у чаті💬</h3>
            <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/interactions/messages.js">messages.js</a>, <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/interactions/whenMessageDelete.js">whenMessageDelete.js</a> & <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/interactions/imageMessage.js">imageMessage.js</a>
            <p>Додає 0.5 XP якщо повідомлення довше за 3 літери та у ньому немає постійного повторення один і тих самих літер.</p>
            <i>Примітка: якщо повідомлення видалилось, то у користувача відніметься 0.5 XP, за відправлену картинку бали не додаються</i>
       </li> 
       <li>
        <h3 id="antispam">Антиспам💢</h3>
        <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/interactions/useAntispam.js">useAntispam.js</a>
        <p>Мутить користувача якщо той спамить однаковими повідомлення та віднімає 5 XP</p>
       </li>
       <li>
       <h3 id="xpForInvites">Додавання балів за запрошення користувачів на сервер📩</h3>
         <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/interactions/updateInvites.js">updateInvites.js</a>
         <p>Додає 100 XP якщо ви доєднали людину до серверу.</p>
         <p>Голова умова - ви повинні перебувати на сервері більш ніж місяць</p>
       </li> 
       <li>
        <h3 id="xpForVoice">Додавання балів за спілкування у голосовому чаті🗣</h3>
        <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/interactions/voiseStateUpdate.js">voiseStateUpdate.js</a> & <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/interactions/check-role-in-vc.js">check-role-in-vc.js</a>
        <p>Одноразово додає 20 XP якщо у чаті присутні чотири або більше користувачів.</p>
        <i>Примітка 1: якщо серед учасників присутній адміністратор або модератор бот додатково додасть 30 XP (наявність чотирьох користувачів не обов'язкова)</i> <br>
        <i>Примітка 2: нарахування відбувається не тільки у голосових каналах, а також у трибунах</i>
       </li> 
       <li>
         <h3 id="xpForBoost">Додавання балів за буст серверу☂</h3>
        <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/interactions/whenBoost.js">whenBoost.js</a>
        <p>Додає 50 XP користувачу за буст серверу.</p>
           <i>Примітка: ця функція є виключенням та додає бали одразу до властивості <code>XP</code></i>
       </li> 
       <li>
            <h3 id="monthRating">Формує щомісячний рейтинг найактивніших учасників серверу📜</h3>
            <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/interactions/sendRatingEveryMonth.js">sendRatingEveryMonth.js</a> & <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/utils/creatingRatingEmbed.js">creatingRatingEmbed.js</a>
            <p>Першого числа кожного місяця зранку відправляє топ 15 найактивніших учасників серверу. Якщо ім'я користувача надто довге то воно буде обрізане.</p>
       </li>
         <li>
       <h3 id="addNewMember">Додавання учасника до бази даних 🗂️</h3>
            <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/interactions/addNewMember.js">addNewMember.js</a>
            <p>Додає нового учасника до бази даних боту. Спрацьовує при першій взаємодії користувача (повідомлення у чат, викликання команди боту, взаємодія з голосовим каналом), до цього користувач не додається</p>
       </li>
       <li>
       <h3 id="badWords">Мут за нецензурну лексику ⛔</h3>
            <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/interactions/badWords.js">badWords.js</a>
            <p>Видає мут користувачу, за використання нецензурної лексики, яку розпізнає бот</p>
       </li>
         <li>
       <h3 id="limitPoints">Ліміт балів на добу⌛</h3>
            <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/interactions/limitPoints.js">limitPoints.js</a>
            <p>Бот має ліміт поінтів на одну добу, він обнуляється щодоби о 12 ночі</p>
            <i>Примітка: бали за буст серверу та команда <code>/editXp</code> цьому правилу не підлягають</i>
       </li>
    </ul>
     <h2 id="commands">Команди боту</h2>
     <p style="font-size: 1.1em;">Бот містить як команди спільного доступу, так і команди, для використання яких у юзера мають бути певні права</p>
     <h3 style="border-bottom: none"><i>Навігація</i></h3>

* [Команда: /xp](#xpCommand)
* [Команда: /edit-xp](#editXpCommand)
* [Команда: /leaders](#leadersCommand)
<ul>
     <li>
       <h3 id="xpCommand">Команда: <code>/xp</code></h3>
            <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/commands/slashCommands/xp.js">xp.js</a>
            <p>Дозволяє переглянути рівень та XP певного користувача. Має один параметр де треба вказати користувача дані про якого Ви хочете отримати.</p>
            <i>Примітка: параметр не є обов'язковим, тому якщо залишити його пустим отримаєте Ваш рівень та XP</i>
       </li>
        <li>
       <h3 id="editXpCommand">Команда: <code>/edit-xp</code></h3>
            <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/commands/slashCommands/editXp.js">editXp.js</a>
            <p>Дозволяє змінити xp конкретного користувача</p>
            <i>Примітка: є доступною лише для учасників з ролями адміністрації та модерації</i>
       </li>
    <li>
            <h3 id="leadersCommand">Команда: <code>/leaders</code></h3>
            <a href="https://github.com/EgorMaz230/discord_bot_goIteens/blob/main/src/commands/slashCommands/leaders.js">leaders.js</a>
            <p>Виводить поточний рейтинг найактивніших учасників</p>
       </li>
    </ul>
     

</div>
<div><h3 align="right">Зроблено Morgana team з 💚</h3>
</div>
