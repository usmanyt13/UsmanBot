const {Client, RichEmbed} = require('discord.js');

module.exports = {
    name:'botinfo',
    run: async (client, message, args) => {

        const member = getMember(message, args.join(" "));

        let bicon = client.user.displayAvatarURL;
    let botembed = new RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Owner", '@!Usmanᵛᵉʳᶦᶠᶦᵉᵈ#1496')
    .addField("Bot Name", client.user.username)
    .addField("Created On", client.user.createdAt)
    .addField('Currently playing', stripIndents`**> Name:** ${member.user.presence.game.name}`);

       // if (member.user.presence.game) 
         //   embed.addField('Currently playing', stripIndents`**> Name:** ${member.user.presence.game.name}`);

    

    message.channel.send(botembed);
    }
}