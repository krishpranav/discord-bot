//discord bot 
//language used: javascript
//github.com/krishpranav

const Discord = require('discord.js')
const client = new Discord.client();

client.on("ready", () => {
	console.log("SuperBot 3000 has initialized!!")
	console.log("===User Information===")
	console.log(`Username: ${client.user.tag}`);
});

client.on("message", (message) => {
	if (message.author.bot) return;
	var prefix = "sup";
	if (message.content.startsWith(prefix + ""))
	{
		var commandSplit = message.content.split(" ");
		var command = commandSplit[1];

		switch(command)
		{
			
			case "hello":
				message.channel.send("Hello There!!")
				break;
		}
	}
});

client.login("") //put your discord token here