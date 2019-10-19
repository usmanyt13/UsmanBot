const { RichEmbed } = require('discord.js');

module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        
    const embev = new RichEmbed()
    .setTitle('Bot Pings')
    
    .setDescription(`The Bot Ping Are:

    ❤ ${Math.round(client.ping)}ms
    `)
    .setColor('#59b6eb')
    message.channel.send(embev);
    }
}