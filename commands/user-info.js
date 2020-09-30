//requiring MessageEmbed to send embed
const { MessageEmbed } = require("discord.js");

//command that responds user info
module.exports = {
  commands:['userinfo' , 'aboutuser'],
  minArgs:1,
  expectedArgs:"<target user's @>",
  callback: (message , arguments) => {
    const { guild , channel } = message ;
    const mentionedUser = message.mentions.users.first();
    const member  = guild.members.cache.get(mentionedUser.id);
    const botUser = mentionedUser.bot;
    const embed = new MessageEmbed()
      .setTitle(`***User Information of ${mentionedUser.username}***`)
      .setColor(`RANDOM`)
      .setFooter(`Thanks For Using CRETOR`)
      .setThumbnail(mentionedUser.displayAvatarURL({dynamic:true}))
      .addFields(
        {
          name:`**User Tag**`,
          value:mentionedUser.tag
        },
        {
          name:`**Bot (True/False)**`,
          value:botUser
        },
        {
          name:`**nickname**`,
          value:member.nickname || 'None',
          inline:true

        },
        {
          name:`**Joined Discord**`,
          value: new Date(member.joinedTimestamp).toDateString(),
          inline:true
        },
        {
          name:`**Joined Discord**`,
          value:new Date(mentionedUser.createdTimestamp).toDateString(),
          inline:true
        },
        {
          name:`**Roles**`,
          value:member.roles.cache.size - 1,
          inline:true
        }
      );

      channel.send(embed);
  }
}
