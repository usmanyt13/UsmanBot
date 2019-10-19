const { Client, RichEmbed } = require('discord.js');

function doRandHT() {
    var rand = ['1!','2!','3!','4!','5!','6!'];
    
    return rand[Math.floor(Math.random()*rand.length)];
    }

    module.exports = {
        name:'roll',
        run: (client, message, args) => {
        let rollembed = new RichEmbed()
        .setColor("#15f153")
        .addField("Dice Landed On!", doRandHT());
        message.channel.send(rollembed);
        }
    }