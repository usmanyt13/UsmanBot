const config = require("../config.json")
const { Client, RichEmbed } = require('discord.js');
    module.exports = {
        name:'help',
        run: (client, message, args) => {
        let rollembed = new RichEmbed()
        .setColor("#15f153")
        .addField("These Are The Available Commands:-",`
        __**Commands**__
        
        __**:construction:Under Construction:construction:**__
if you have any suggestions about what should be added in me, type **!psuggest <suggestion>**

        Use **${config.prefix}help_<command>** for details`)
        .addField("__**General Commands**__", `
**help**: Responds With This Message
        
**info**: Responds With Informations About Bot
        
**ping**: Responds With The Latency From The Bot
       
**serverinfo**: Responds Wiht Informations About The Server`)
        .addField("__**Fun Commands**__", 
            `
**roll**: Roll Dice
        
**flip**: Flip Coin`);
        message.channel.send(rollembed);
        message.react("✅");    
    }
        
    }
