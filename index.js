//require discord.js(installed with npm)
const Discord = require("discord.js");

//maxlistners warning fix
process.setMaxListeners(100);

require('events').EventEmitter.defaultMaxListeners = 20;

//require fs (inbuilt npm module)
const fs = require("fs");

//require path (inbuilt module)
const path = require("path");

//require config.json locally which contain personal bot info
const config = require("./config.json");

//require basic command handler from command.js locally
const command =require("./command.js")

//creating new discord Client
const client = new Discord.Client();

//Making bot online(Starting bot) and setting activity status
client.on("ready",()=>{
  console.log("Bot Is Ready and Running");
  client.user.setActivity(config.prefix+ "help | CRETOR",{type:"WATCHING"});

//const which holds base file
const baseFile = 'command-base.js';

//require command base
const commandBase =require(`./commands/${baseFile}`)

//reading commands from directory commands
const readCommands = dir =>{
  const files = fs.readdirSync(path.join(__dirname,dir))
  for (const file of files){
    const stat = fs.lstatSync(path.join(__dirname,dir,file))
    if(stat.isDirectory()){
      readCommands(path.join(dir,file))
    }else if(file !== baseFile){
      const option =require(path.join(__dirname,dir,file))
        commandBase(client,option)
    }
  }
}
readCommands("commands")

//command to ban Members
command(client, 'ban', (message) => {
  const { member, mentions } = message

  const tag = `<@${member.id}>`

  if (
    member.hasPermission('ADMINISTRATOR') ||
    member.hasPermission('BAN_MEMBERS')
  ) {
    const target = mentions.users.first()
    if (target) {
      const targetMember = message.guild.members.cache.get(target.id)
      targetMember.ban()
      message.channel.send(`${tag} That user has been`)
    } else {
      message.channel.send(`${tag} Please specify someone to ban.`)
    }
  } else {
    message.channel.send(
      `${tag} You do not have permission to use this command.`
    )
  }
})

//command to kick users
command(client, 'kick', (message) => {
  const { member, mentions } = message

  const tag = `<@${member.id}>`

  if (
    member.hasPermission('ADMINISTRATOR') ||
    member.hasPermission('KICK_MEMBERS')
  ) {
    const target = mentions.users.first()
    if (target) {
      const targetMember = message.guild.members.cache.get(target.id)
      targetMember.kick()
      message.channel.send(`${tag} That user has kicked`)
    } else {
      message.channel.send(`${tag} Please specify someone to kick.`)
    }
  } else {
    message.channel.send(
      `${tag} You do not have permission to use this command.`
    )
  }
})

//command that responds to botInfo
command(client , 'botinfo' , (message) =>{
  const botInfoEmbed = new Discord.MessageEmbed()
      .setTitle(`<a:c_:757880790758719498><a:r_:757880792750751764><a:e_:757880792075468860><a:a_:757880790443884594><a:t_:757880792121606214><a:o_:757880792847351858><a:r_:757880792750751764> `)
      .setColor(`RANDOM`)
      .setThumbnail(config.gif)
      .setFooter("Thanks For Using CRETOR")
      .addFields(
        {
        name:"Author",
        value:config.author.name
        },
        {
          name:"Author's Instagram",
          value:config.author.instagram
        },
        {
          name:"GitHub",
          value:`You Can Find ${config.name}'s Code here \n ${config.author.github}`
        },
        {
          name:"Prefix",
          value:config.prefix
        },
        {
          name:"Servers Serving",
          value:client.guilds.cache.size
        },
        {
          name:"Support Server",
          value:config.supportServer
        }
      );

    message.channel.send(botInfoEmbed);
});

//command that gives random fact/quote
command(client , 'fact' , (message) =>{
  const numberOfImages = 50;
  const imageNumber = Math.floor(Math.random()*(numberOfImages-1 + 1)) + 1;
  const randomImage ={files:['./images/'+imageNumber+'.png'] , size:4096};
  console.log(randomImage.files.toString());
  const randomImageEmbed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle("Source: Typewriter's Voice")
        .setDescription(`<a:instagram:757880788388937759> https://www.instagram.com/typewritersvoice/`)
        .setFooter("Thanks For Using CRETOR");
  message.channel.send(randomImage);
  message.channel.send(randomImageEmbed);
});
//command which gives server list
command(client,"servers",(message) =>{
    message.channel.send("I Am Running in The Following Servers:");
  client.guilds.cache.forEach((guild) =>{
    message.channel.send(`--"${guild.name}" and it Has A Total of ${guild.memberCount} Members`);
  });
});

//command for bulk delete or clear messages(Must Have Manage Messages permission or Admin permission)
command(client, ["clearchannel","cc","clearChannelMessages"],message =>{
  if(message.member.hasPermission('ADMINISTRATOR' || "MANAGE_MESSAGES")){
    message.channel.messages.fetch().then(results =>{
      message.channel.bulkDelete(results);
    });
  }
});

//ending client.on
});
//logging in bot using token
client.login(config.token);
