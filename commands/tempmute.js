const ms = require('ms');
const Client = require('discord.js');


module.exports = {
    name:'tempmute',
    category: "moderation",
    description: "TempMute the member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        let tomute = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
        if(!tomute) return message.reply("Could Not Find User.");
        if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't Mute Them!");
        let muterole = message.guild.roles.find('name', "muted");
        if(!muterole){
            try{
                muterole = await message.guild.createRole({
                    name:'muted',
                    colour:'#FA5673',
                    Permission:[]
                })
                message.guild.channels.array.forEach(async (channel, id) => {
                  await channel.overwritePermission(muterole, {
                      SEND_MESSAGES: false,
                      ADD_REACTIONS: false
                  });  
                });
            }catch(e){
                console.log(e.stack);
            } 
        }

        let mutetime = args[1];
        if(!mutetime) return message.reply("You Didn't Specify The Time");

        await(tomute.addRole(muterole.id));
        message.reply(`<@${tomute.id}> has been Muted For ${(mutetime)}`);

        setTimeout(function(){
            tomute.removeRole(muterole.id);
            message.channel.send(`<@${tomute.id}> has Been UnMuted!`)
        }, ms(mutetime));
    }
}