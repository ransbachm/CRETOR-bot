//command which adds two numbers
module.exports = {
  commands:["add","sum","addition"],
  expectedArgs:"<number1> <number2>",
  permissionError:"You Need To Have Admin Permission to Run This Command",
  type: "math",
  minArgs:2,
  maxArgs:2,
  callback:(message,arguments,text) =>{
    const num1 = +arguments[0];
    const num2 = +arguments[1];
    message.reply(`The Sum is ${num1+num2}`)
  },
  permissions:['ADMINISTRATOR'],
  requiredRoles:[]
}
