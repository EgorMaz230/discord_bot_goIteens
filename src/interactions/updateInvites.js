<<<<<<< HEAD:src/interactions/updateInvites.js
const addPoints = require("../utils/addPoints");

// function addPoints(id, amount) {
//   Level.findOne({ userId: id })
//     .exec()
//     .then((op) => {
//       if (op !== null) {
//         let exp = op.xp + amount;
//         Level.updateOne({ userId: id }, { xp: exp }).then();
//       }
//     });
// }
=======
const Level = require("../models/Level");
const updateLevel = require("./updateLevel");

function addPoints(id, amount) {
  Level.findOne({ userId: id })
    .exec()
    .then((op) => {
      if (op !== null) {
        let exp = op.xp + amount;
        Level.updateOne({ userId: id }, { xp: exp }).then();
        updateLevel(op, id);
      }
    });
}
>>>>>>> 6931b958790e74cfe3b5def5e30ba4432976c92c:src/utils/updateInvites.js

module.exports = async function updateInvites(person, client) {
  client.guilds.cache.each((guild) => {
    guild.invites.fetch().then((guildInvites) => {
      guildInvites.each((guildInvite) => {
        if (String(guildInvite.inviterId) in mainObj) {
          const newValue =
            global.tempObj[String(guildInvite.inviterId)] + guildInvite.uses;
          global.tempObj[String(guildInvite.inviterId)] = newValue;
        }
      });
    });
  });

  let res = await person.guild.members.fetch();
  function up() {
    res.forEach((member) => {
      if (!member.user.bot) {
        if (
          global.tempObj[String(member.user.id)] !==
          global.mainObj[String(member.user.id)]
        ) {
          global.mainObj[String(member.user.id)] =
            global.tempObj[String(member.user.id)];
          addPoints(member.user.id, 100);
        }
      }
    });
  }
  setTimeout(up, 500);
};
