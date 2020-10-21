//discord bot
//language used: javascript

const Discord = require('discord.js')
const client = new Discord.client();

client.on('message', message => {
	if (message.content.startWith('ping')){
		message.reply('pong!');
	}
})

client.on('ready', () => {
	console.log('I am ready!');
})
 