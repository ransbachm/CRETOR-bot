//require MessageEmbed for Sending embed
const { MessageEmbed } = require("discord.js");

//command that responds on help
module.exports = {
  commands: "help",
  callback: (message) =>{
    const embed = new MessageEmbed()
      .setAuthor(`CRETOR HELP`)
     .setTitle(`Command List:`)
     .setColor(`RANDOM`)
     .setDescription("Note: All The Commands Listed Below are Case Insensitive, It Means You Can use Commands in Both Lower Case and Upper Case..")
     .setThumbnail("https://i.ibb.co/821yRLn/ezgif-com-gif-maker.gif")
     .setFooter(`Thanks For Using CRETOR`)
     .addFields(
       {
        name:`<a:rightarrowMov:757880786061099108> **Prefix : $**`,
        value:"You Have To Use The Above Prefix for All The Below Commands." ,
       },
       {name:`<a:rightarrowMov:757880786061099108>  **For Help :**`,
         value:`**help :** Prints All List Of Command of CRETOR bot`
       },
       {
         name:`<a:rightarrowMov:757880786061099108> **SUPPORT:**`,
         value:`**invite :** Gives you invte Link of Bot.
      **botinfo :** Information About Bot and Bot Author.
      **upvote :** (Currently Unavilable)
      **website :** (Currently Unavilable)`
      },
      {
        name:`<a:rightarrowMov:757880786061099108> **FUN:**`,
        value:`**Ping :** Gives ping/Latency,
        **hello : ** Says Hello Back To You.
        **fact :** Spawn's A Intresting Fact/Quote.
        **dp :** Gives Avatar/Pfp of Mentioned User.`
      },
      {
        name:`<a:rightarrowMov:757880786061099108> **INFORMATION:**`,
        value:`**Serverinfo :** Prints Some Information about Server.
        **Userinfo :** Prints Some Information about Mentioned User.
        **MemberCount :** Prints Total Members In Server, Online Members, Offline,etc.. `
      },
      {
        name:`<a:rightarrowMov:757880786061099108> **MODERATION:**`,
        value:`**Kick :** Kicks Mentioned User From the Server.
        **Ban :** Bans Mentioned User From the Server.
        **createvc :** Creates voice channel with Mentioned Name.
        **createtc :** Creates text channel with Mentioned Name.
        **addrole :** Gives Specfic Role To Mentioned User.
        **delrole :** Removes/Deletes Specfic Role From Mentioned User.
        **hasrole :** Says Weather Mentioned User Have or Don't Have Specfied Role.
        **cc :** Bulk Clears Messages In Specfic Channel \n
        (Note: The Version Of Bot is 0.1 you Can See More commands in Future)\n`
      },
      {
        name:`<a:rightarrowMov:757880786061099108> **SUPPORT SERVER :**`,
        value:`For Any Further Support You Can Join This Server
        https://discord.gg/GqVRQZX `
      }
    );
     message.channel.send(embed);
  }
}
