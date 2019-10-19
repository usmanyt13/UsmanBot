const { RichEmbed, Discord } = require("discord.js");


module.exports = {
    name: "kick",
    category: "moderation",
    description: "Kicks the member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        let author = message.author.id
        if (author.hasPermission('KICK_MEMBERS')) {
        return message.reply("Sorry, you don't have permissions to use this!");}
      
      let member = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!member)
        return message.reply(`**EA!kick <@user> <Reason>**`);
      if(!member.kickable) 
        return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
      
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided";
      
      await member.kick(reason)
        .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        function doRandHT() {
          var rand = [`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`];
          return rand[Math.floor(Math.random()*rand.length)];
        }
        
         
        const embed = {
          "title": `Member kicked`,
          "description": doRandHT(),
          "color": 7584788,
          };
          message.channel.send({ embed });
          
          
          }
        };
         
