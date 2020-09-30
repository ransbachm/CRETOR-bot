//require prefix from config because we are goona use prefix to split message sent by user
const { prefix } = require("../config.json");
//Command That Creates Text Channel and Names What User Enterd
module.exports={
  commands : [ "createtc"],
  permissions:"ADMINISTRATOR" || 'MANAGE_CHANNELS',
  permissionError:"You Need To Have Admin Permission or Manage Channel Permission To Use This Command",
  minArgs:1,
  maxArgs:2,
  expectedArgs:"Channel Name",
  type:"",
  callback:(message,arguments,text)=>{
    const channelName= message.content.replace(`${prefix}createtc `,'')
    message.guild.channels.create(channelName , {
      type:'text'
    }).then((channel) =>{
    })
  }
}
