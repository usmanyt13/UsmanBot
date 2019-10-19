const { RichEmbed, Discord } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "ban",
    category: "moderation",
    description: "bans the member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        cif(!message.member.hasPermission("BAN_MEMBERS"))
        return message.reply("Sorry, you don't have permissions to use this!");
      
            let member = message.mentions.members.first();
            if(!member)
              return message.reply(`**u!ban <@user> <Reason>**`);
            if(!member.bannable) 
              return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
        
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "No reason provided";
            
            await member.ban(reason)
              .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
              function doRandHT() {
                var rand = [`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`];
                return rand[Math.floor(Math.random()*rand.length)];
              }
              
               
              const embed = {
                "title": `Member banned`,
                "description": doRandHT(),
                "color": 7584788,
                };
                message.channel.send({ embed });
                
                
     }
    };
