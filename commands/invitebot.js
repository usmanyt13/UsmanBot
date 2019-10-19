const { RichEmbed } = require('discord.js');

module.exports = {
    name:'invitebot',
    run:  async (client, message, args, prefix) => {
        const embed = new RichEmbed()
        .setTitle('Invite Bot')
        .setURL('https://discordapp.com/oauth2/authorize?client_id=619572094379884574&scope=bot&permissions=8')
        .setDescription(`Invite The Bot Using This Link 
        https://discordapp.com/oauth2/authorize?client_id=619572094379884574&scope=bot&permissions=8`)
        .setColor('#59b6eb')
        
        message.channel.send(embed);
    }
}