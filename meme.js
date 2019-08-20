module.exports = class meme {
    constructor() {
      this.name = 'meme',
        this.alias = ['meme', 'me'],
        this.usage = 'i/meme'
    }

    async run(client, message, args, Discord) {
        var request = require('request'); //Meme Command
        const fetch = require("node-fetch");

        fetch('https://www.reddit.com/r/dankmemes/random/.json').then(response => {
            return response.json();
          }).then(json => { // Print the response status code if a response was received
  const memeEmbed = new Discord.MessageEmbed() 
    .setColor('#0000FF')
    .setTitle(json[0].data.children[0].data.title)
    .setImage(json[0].data.children[0].data.url)
    .setURL(json[0].data.children[0].data.url)
    .setDescription(json[0].data.children[0].data.selftext)
    .setFooter('Images Provided by the DankMeme Subreddit')
    message.react("😈");
   message.channel.send(memeEmbed)
})}}
