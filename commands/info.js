const {Client, RichEmbed} = require('discord.js');

module.exports = {
    name:'botinfo',
    run: async (client, message, args) => {
        let bicon = client.user.displayAvatarURL;
    let botembed = new RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", client.user.username)
    .addField("Maker", `I am created by <@474529598504304641> owner of **[Elite]-Bots**`)
    .addField("Created On", client.user.createdAt);

    message.channel.send(botembed);
    }
}