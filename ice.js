const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone:true});
require('dotenv').config();
const fs = require('fs');
const config = require("./config.json");
const {CommandHandler} = require('djs-commands');
  
const CH = new CommandHandler({
    folder: __dirname + '/commands/',
  prefix: ['i/']
});

client.on('message', async (message) => {
if (message.author.type === 'bot') return undefined;
      if (message.channel.type === 'dm') return undefined;
  
      let args = message.content.split(" ");
      let command = args[0].toLowerCase();
  let cmd = CH.getCommand(command);
try {
    cmd.run(message, args, client);
  } catch (error) {
    console.error(`\u001b[31m`, `An Error was recieved: ${error}`);
  console.error(`\u001b[31m`, `Error Message: ${error.message}`);
}
});


client.on('ready', () => { //On ready
 console.log(`\u001b[31m`, `------------[ Ice Bot ]------------`)
 console.log(`\u001b[32m`, `Welcome To Ice Bot\n Written By Iceyy\n Check loads above for handlers\n Refer to config.json and event_handler.js for config prefixes!`)
 console.log(`\u001b[31m`, `------------[ Ice Bot ]------------`)

 console.log(`\u001b[31m`, `\n\n------------[ Stats ]------------`)
 console.log(`\u001b[32m`, `Bot Username: ${client.user.username}\n Invite Link: https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
  console.log(`\u001b[32m`, `Running for ${client.guilds.size} guild(s) and ${client.users.size} users!`)
 console.log(`\u001b[31m`, `------------[ Ice Bot ]------------`)
 //client.user.setActivity(`for i/help on ${client.guilds.size} server(s)`, {type: "WATCHING"}); // Use when Development is done
 client.user.setActivity(`My command handler`, {type: "WATCHING"});
})

client.login(config.token);


client.on("guildCreate", guild => { //Reset activity on Join
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`i/help | Watching ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => { //Reset activity on leave
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`i/help | Watching ${client.guilds.size} servers`);
});


client.on("message", message => {
  if (message.content.startsWith("alive?"))
  (message.reply("I am alive!"))
})