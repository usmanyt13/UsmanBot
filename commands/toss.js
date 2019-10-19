const RichEmbed = require('discord.js');

module.exports = {
    name:'toss',
    run: async (client, message, args) => {
        {
            function doRandHT() {
            var rand = ['HEADS!','TAILS!'];

            return rand[Math.floor(Math.random()*rand.length)];
            }
            

const embed = {
    "title": `Here is The Winner`,
    "description": doRandHT(),
    "colour": 7584788,
    };
    message.channe.send({ embed });

        }
    }
};

    
    
