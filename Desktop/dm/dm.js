//Run unlocker if you want to use this as a selfbot

const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login("MjM1OTA0NTQ0Nzc1NjAyMTc4.GH-c7U.MWT9tCMLeQ8AHD3b0L7GPRrhN4X3iHLoHEGqE4");

bot.on("ready", function() {
console.log("Bot/Selfbot started.");
});

bot.on("message", function(message) {
	if(message.content.toLowerCase() == "dm") {
		console.log("starting")
		bot.guilds.get(message.guild.id).members.forEach(member1 => {
			console.log(`Attempting to DM through selfbot API`)
			console.log(`DM'ed ${member1.user.tag}`)
			member1.send('Заповядай във най-новия българскиВидео Портал качвай,гледай, споделяй и се забавлявай ! https://bgbox.eu/  ')
		
		});
	}
	});