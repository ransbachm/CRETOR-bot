//requiring MessageEmbed from discord module to send embed
const { guild , MessageEmbed } = require("discord.js");

//command that gives users avatar/profilepic
module.exports = {
  commands : ["av","dp","pfp"],
  callback: (message , arguments , text) => {
    const mentionedUser = message.mentions.users.first()
    const authorAv = message.author.displayAvatarURL({size:4096,dynamic:true});

   if(!mentionedUser){
     const autorEmbed = new MessageEmbed()
          .setTitle("Your Avatar/Pfp")
          .setColor(`RANDOM`)
          .setImage(authorAv)
          .setFooter("Thanks For Using CRETOR");
  message.channel.send(autorEmbed);

}else{
  const mentionedUserAvatar = mentionedUser.displayAvatarURL({size:4096 , dynamic:true});
 const mentionedUserAvatarEmbed = new MessageEmbed()
            .setTitle(`${mentionedUser.username}'s Avatar/pfp`)
            .setImage(mentionedUserAvatar)
            .setColor(`RANDOM`)
            .setFooter("Thanks For Using CRETOR");
    message.channel.send(mentionedUserAvatarEmbed);

}
  }
}
