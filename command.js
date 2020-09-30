//importiong prefix from config.json
const { prefix } = require("./config.json");
//exporting module
module.exports=(client,aliases,callback)=>{
//basic command handler with aliases
 if (typeof aliases === "string"){
   aliases = [aliases]
 }
client.on("message", message => {
  const { content } = message;
aliases.forEach(alias => {
  const command =`${prefix}${alias}`
  if(content.startsWith(`${command} `) || content === command){
    console.log(`Running The Command ${command}`)
    callback(message);
  }
})
})
//ending module.exports
}
