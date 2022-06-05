const Discord = require("discord.js");
const { Client, Intents } = require('discord.js');
    
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.login("MjM1OTA0NTQ0Nzc1NjAyMTc4.Gs8Pfm.Wx2GZgySvt6RooSqk9lOpYLOCr80FjMgbaH0EE");

bot.on("ready", function() {
console.log("Bot/Selfbot started.");
});

bot.on("message", function(message) {
	if(message.content.toLowerCase() == "dm") {
		console.log("starting")
		bot.guilds.get(message.guild.id).members.forEach(member1 => {
			if(member1.user.tag == "Zusitveer#5924"){
				return;
			}else{
				console.log(`Attempting to DM through selfbot API`)
				console.log(`DM'ed ${member1.user.tag}`)
				member1.send('https://discord.gg/qpkbaGm')
			}
		});
	}
});