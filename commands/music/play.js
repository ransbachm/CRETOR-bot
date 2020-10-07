const { MessageEmbed } = require("discord.js");

module.exports = {
  commands:["play"],
  callback:(message,arguments,text,client) =>{
    client.player.play(message, arguments[0], message.member.user);
  }
}
