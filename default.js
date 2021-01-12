//discord bot
//language used: javascript
//github.com/krishpranav

const Discord = require('disocrd.js');
const client  = new Discord.client();

client.on('message', message => {
	if (message.content.startWith('ping')){
		message.reply('pong!');
	}
})

client.on('ready', () => {
	console.log('I am ready!');
})
