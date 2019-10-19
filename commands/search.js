module.exports = {
name:"search",
run: async (client, message, args) => {
const messagelol = args.slice(0).join(' ');

const exampleEmbed = new Discord.RichEmbed()
	.setColor('#f442c8')
	.setTitle('Some title')
	.setURL('https://www.google.com/')
	.setAuthor('Google Search', 'https://cdn.discordapp.com/attachments/607537612395118592/607582695131840532/7Dj7PmmnyLzLQEfmJsQWEQsSJ7Y3ugQ5ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODjeJfwPBW3IvLn7DRAAAAAASUVO.png/')
	.setDescription(`Search Google... https://www.google.com/search?q=${messagelol}`)
	.setThumbnail('https://cdn.discordapp.com/attachments/607537612395118592/607582695131840532/7Dj7PmmnyLzLQEfmJsQWEQsSJ7Y3ugQ5ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODjeJfwPBW3IvLn7DRAAAAAASUVO.png')

message.channel.send(exampleEmbed);

}
}