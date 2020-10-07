const { MessageEmbed } = require("discord.js");

module.exports = {
  commands:["queue"],
  callback: async (message,arguments,text,client) =>{
    const queue = await client.player.getQueue(message);

    const tracks = queue["tracks"];

    let tracksEmbedd = new MessageEmbed()
          .setTitle("Now playing")
          .setColor(0x024bb0) // blue
          .setFooter("Thanks For Using CRETOR")
          .setURL("https://youtube.com") // replace with better link
          .setThumbnail(message.author.displayAvatarURL())
    ;


    for(let track of tracks) {
      const author = track["author"] != null ? track["author"] : "[no author]";
      const title = track["title"] != null ? track["title"] : "[no title]";
      tracksEmbedd.addField(author, title);
    }

  message.channel.send(tracksEmbedd);
  }
}
