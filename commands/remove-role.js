module.exports = {
  commands: ['removerole','delrole'],
  minArgs: 2,
  expectedArgs: "<Target user's @> <The role name>",
  permissions: 'ADMINISTRATOR' || 'MANAGE_ROLES',
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

    if(member.roles.cache.get(role.id)){
      member.roles.remove(role)
      message.channel.send(`The Role '${roleName}', Has Been Removed From ${targetUser }`)
    }else{
      message.reply(`The User Mentioned Does Not Have Role ${roleName} !` )
    }

  },
}
