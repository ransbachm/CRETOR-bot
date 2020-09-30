
module.exports = {
commands: ['hello','hi'],
minArgs: 0,
maxArgs: 0,
callback: (message, arguments, text) => {
  message.channel.send('Hey There! How Can I Help You?');
},
}
