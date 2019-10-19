const Discord = require('discord.js')
const config = require('../config.json')
let color = config.color
let tada = config.emoji
if(!tada)tada = '🎉'
if(color == '0xhex') color = 0x00ffff
module.exports.run = async (client, message, args, prefix) => {
let channel = message.channel
let copunt = args[0]
let time = args[1]
let question = args.slice(2).join(' ');

let embed = new Discord.RichEmbed()
    .setTitle(question)
    .setDescription('React with 🎉 to enter!!\nEnds in ' + Math.floor(time / 1000) + 's from now.')
    .setColor(color)
    .setFooter(`Made by Sunny Singh`)
    .setTimestamp();
  message.channel.send(embed).then(message => {
    message.react('🎉').then(r => {
      setTimeout(function () {
        if (message.reactions.get('🎉').count <= 1) {
          let embed2 = new Discord.RichEmbed()
            .setTitle(question)
            .setDescription('The Giveaway has ended, not enough people voted..')
            .setColor(color)
            .setTimestamp();
          message.edit(embed2);
          message.channel.send(Date.now())
        } else {
          var winners = [];

          let user;
          // If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
          if (message.mentions.users.first()) {
            user = message.mentions.users.first();
          } else {
            user = message.author;
          }
          // Define the member of a guild.
          const member = message.guild.member(user);

          const users = message.reactions.get("🎉").users;
          const list = users.array().filter(u => u.id !== member.id);
          // let winner = list[Math.floor(Math.random() * list.length)];
          for (let i = 0; i < copunt; i++) {
            const x = draw(list);

            if (!winners.includes(x)) winners.push(x);
          }

          let embed3 = new Discord.RichEmbed()
            .setTitle(question)
            .setDescription(`Winner: ${winners.filter(u => u !== undefined && u !== null).map(u => u.toString()).join(", ")}`)
            .setFooter('Ended At')
            .setColor(color)
            //.setFooter(`${copunt} Winner(s)`)
            .setTimestamp();
          message.edit(embed3)
          message.channel.send(`🎉🎉🎉 -Congrats to ${winners.filter(u => u !== undefined && u !== null).map(u => u.toString()).join(", ")} with winning ${question}`)
        }
      }, time);
    })
  })
}
function shuffle(arr) {
  for (let i = arr.length; i; i--) {
    const j = Math.floor(Math.random() * i);
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  }
  return arr;
}

function draw(list) {
  const shuffled = shuffle(list);
  return shuffled[Math.floor(Math.random() * shuffled.length)];
}
