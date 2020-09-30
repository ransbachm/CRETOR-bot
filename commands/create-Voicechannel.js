//require prefix from config because we are goona use prefix to split message sent by user
const { prefix } = require("../config.json");

//command that creates a Voice channel
module.exports={
  commands : [ "createvc"],
  permissions:"ADMINISTRATOR" || 'MANAGE_CHANNELS',
  permissionError:"You Need To Have Admin Permission or Manage Channel Permission To Use This Command",
  minArgs:1,
  maxArgs:2,
  expectedArgs:"Channel Name",
  type:"",
  callback:(message,arguments,text)=>{
    const channelName= message.content.replace(`${prefix}createvc `,'')
    message.guild.channels.create(channelName , {
      type:'Voice'
    }).then((channel) =>{
    })
  }
}
