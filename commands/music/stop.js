const { MessageEmbed } = require("discord.js");

module.exports = {
  commands:["stop"],
  callback:(message,arguments,text,client) =>{
    client.player.stop(message);
  }
}
