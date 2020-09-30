//requiring discord Embed from discord module to send Embed
const { MessageEmbed } = require("discord.js");
//command thad responds with bot invite Link

module.exports = {
  commands:["invite",'botlink'],
  callback: (message) => {
    const inviteLinkEbed = new MessageEmbed()
       .setTitle(`<a:c_:757880790758719498> <a:r_:757880792750751764> <a:e_:757880792075468860> <a:a_:757880790443884594> <a:t_:757880792121606214> <a:o_:757880792847351858> <a:r_:757880792750751764>`)
       .setDescription(`Below Link Is Invite Link For CRETOR bot`)
       .setColor(`RANDOM`)
       .setThumbnail("https://i.ibb.co/821yRLn/ezgif-com-gif-maker.gif")
       .addFields(
       {
         name:`<a:rightarrowRai:757880789861138462>  Invite Link For CRETOR bot`,
         value:"https://discord.com/oauth2/authorize?client_id=756003621539151952&scope=bot&permissions=268758134"
       }
       )
       .setFooter("Thanks For Using CRETOR");
       message.channel.send(inviteLinkEbed)
  }
};
