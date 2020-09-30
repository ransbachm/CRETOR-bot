//require discord.js because we are going to Embed Ping Message
const { MessageEmbed } = require("discord.js");
//givs Latency/ping of bot or discord API
module.exports = {
  commands:["ping"],
  callback:(message,arguments,text,client) =>{
    message.channel.send(`<a:cal:757880788174897162> Caliculating Ping...`).then(resultMessage =>{
      const ping =resultMessage.createdTimestamp - message.createdTimestamp;

      const embed = new MessageEmbed()
      .setTitle("🏓 "+` Ping: ${ping} ms`)
      .setColor(`RANDOM`);


      message.channel.send(embed);
    });
  },

}
