module.exports = {
  commands: 'hasrole',
  minArgs: 2,
  expectedArgs: "<Target user's @> <The role name>",
  permissions: 'ADMINISTRATOR',
  callback: (message, arguments) => {
    const targetUser = message.mentions.users.first()
    if (!targetUser) {
      message.reply('Please specify someone to give a role to.')
      return
    }

    arguments.shift()

    const roleName = arguments.join(' ')
    const { guild } = message

    const role = guild.roles.cache.find((role) => {
      return role.name === roleName
    })
    if (!role) {
      message.reply(`There is no role with the name "${roleName}"`)
      return
    }

    const member = guild.members.cache.get(targetUser.id)

    if (member.roles.cache.get(role.id)) {
      message.channel.send(`The user ${targetUser} has the ${roleName} role`)
    } else {
      message.channel.send(`The user ${targetUser} does not have the ${roleName} role`)
    }
  },
}
