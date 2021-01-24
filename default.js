//discord bot
//language used: javascript
//github.com/krishpranav

const Discord = require('disocrd.js');
const client  = new Discord.client();

client.on("ready", () => {
	console.log("SuperBot 3000 has initialized!!")
	console.log("====User Information====")
	console.log(`Username: ${client.user.tag}`);
});

