const config = require("./config.json");
const { RichEmbed } = require('discord.js');
const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
client.login(process.env.BOT_TOKEN)
const prefix = config.prefix

client.commands = new Discord.Collection();
client.cmdhelp = new Discord.Collection();
// Initialize the invite cache
const invites = {};

// A pretty useful method to create a delay without blocking the whole script.
const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  // "ready" isn't really ready. We need to wait a spell.
  wait(1000);

  // Load all invites for all guilds and save them to the cache.
  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberAdd", (member) => { 
  const Channel = member.guild.channels.find(channel => channel.name === "welcome");
  let memberTag = member.user.tag; 
  Channel.send(new Discord.RichEmbed() 
    .setTitle("Welcome" + memberTag +  `to the `) 
    .setDescription("Do not forget to check rules and never try to break any of them") 
    .setThumbnail(member.user.displayAvatarURL) 
    .addField("__Thanks for joining__", "**Hope you will be active here**")
    .addField("__Join Position__", member.guild.memberCount) 
    .setTimestamp() 
    .setImage('https://cdn.discordapp.com/attachments/569464307654590474/627849035025481731/welcome.gif')
    );
  }
  );

client.on('message', async message => {
 if (message.isMentioned(client.user))
    {
      const embed = {
        "title": `Need Help?`,
        "description": `My prefix in this server is **${config.prefix}**. To learn how to use the bot, use the **${config.prefix}help** command`,
        "color": 7584788,
        };
        message.channel.send({ embed });
}
});
client.on('guildMemberAdd', member => { 
  member.guild.fetchInvites().then(guildInvites => {
  const ei = invites[member.guild.id]; 
  invites[member.guild.id] = guildInvites; 
  const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses); 
  const inviter = client.users.get(invite.inviter.id); 
  const welcomeChannel = member.guild.channels.find(channel => channel.name === "invites"); 
  welcomeChannel.send(`${member.user.tag} **joined**; Invited by **${inviter.tag}**(${invite.uses} invites) Invite Code : **${invite.code}**`); }); });

client.loadCommands = () => {
  fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err);

    let jsFiles = files.filter(f => f.split('.').pop() === 'js');

    console.log(`LOG Loading a total of ${jsFiles.length} commands.`);

    jsFiles.forEach((f, i) => {
      delete require.cache[require.resolve(`./commands/${ f }`)];
      let props = require(`./commands/${ f }`);
      //console.log("LOG Loading command: " + f);
      client.commands.set(f, props);
    });
  });
};

client.loadCommands();

client.on('message', async message => {
  if(!message.content.toLowerCase().startsWith(prefix)) return
    if(!message.guild.me.hasPermission("SEND_MESSAGES")) return
  
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    var command = args.shift().toLowerCase();

    let cmd = client.commands.get(command + ".js");
    
    if (cmd) {
      cmd.run(client, message, args, prefix);
    }
})

client.on("ready", ready => {
  var timer;
  var i = 0;
    timer = client.setInterval(function () {
      var gamePresence = [
        `${config.prefix}help`,
        ` ${client.guilds.size} Servers!`,
        `${client.users.size} users!`,
        `Owner ⇛ !Usmanᵛᵉʳᶦᶠᶦᵉᵈ✓#1496`
      ];
      client.user.setPresence({ 
       game: { name: gamePresence[i%gamePresence.length],
        type: 3} });
      i++;
    },7500);
})
