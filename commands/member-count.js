//requiring MessageEmbed to send embeds
const { MessageEmbed } = require('discord.js');

//command that responds with member Count
module.exports = {
  commands:['membercount'],
  callback: (message) => {
    const { memberCount } = message.guild;
    const memberCountEmbed = new MessageEmbed()
    .setTitle(`**Member Count**`)
    .setColor(`RANDOM`)
    .setDescription(`${memberCount}`)
    .setFooter("Thanks For Using CRETOR");

    message.channel.send(memberCountEmbed);
  }
}
