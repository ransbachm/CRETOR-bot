//require message Embed from discord module because we will use embed to send server info
const { MessageEmbed } = require("discord.js");

//command that gives server info
module.exports = {
  commands : ['serverinfo','aboutserver'],
  type:"general",
  callback: (message,arguments,text) => {
    const { guild } = message ;
    const { name , memberCount , region , owner , afkTimeout , createdAt, roles } = guild;
    const icon =guild.iconURL() ;
    const createdDate = createdAt.toDateString() ;

    const embed = new MessageEmbed()
    .setTitle(`***Server info of  "${name}"*** \n`)
    .setThumbnail(icon)
    .setColor(`RANDOM`)
    .setFooter("Thanks For Using CRETOR")
    .addFields(
      {
      name:` **Server Region**`,
      value:region.toUpperCase(),
      inline:true
    },
    {
      name:`**Members**`,
      value:memberCount,
      inline:true
    },
    {
      name:`**Owner**`,
      value:owner.user.tag,

    },
    {
      name:`**AFK Timeout**`,
      value:`${afkTimeout / 60} Minutes`,
      inline:true
    },
    {
      name:`**Date Created**`,
      value:createdDate,
      inline:true
    },
    {
      name:`**Roles**`,
      value:roles.cache.size - 1,
      inline:true
    },


  );
  message.channel.send(embed);
  }
}
