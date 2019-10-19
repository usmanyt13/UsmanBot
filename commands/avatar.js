module.exports = {
    name:'avatar',
    run: async(client, message, args) => {
        let member = message.mentions
  message.channel.send(`${message.memberTag.avatarURL}`)

    }
};