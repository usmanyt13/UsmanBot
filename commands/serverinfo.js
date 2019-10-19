const { Client, RichEmbed } = require('discord.js');


module.exports = {
    name:'serverinfo',
    run: (client, message, args) => {
        let sicon = message.guild.iconURL;
    let serverembed = new RichEmbed()
    .setTitle("Server Information")
    .setDescription(`__**OWNER**__
    → ${message.guild.owner}
    
      __**REGION**__
      → ${message.guild.region}
      
      __**MemberCount**__
      → ${message.guild.membercount}
      
      __**USERS**__
      → ${message.guild.members.filter(member => !member.user.bot).size}
      
      __**Created On**__
      → ${message.guild.createdAt}
      
      __**Total Channel**__
      → ${message.guild.channels.size}`)

      .setFooter(`Serving ${client.guilds.size}`)
    .setColor("#15f153")
   

    message.channel.send(serverembed);
    


}
}