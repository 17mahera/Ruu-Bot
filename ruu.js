// Requires
const Discord = require('discord.js')

// Create an instance of a Discord client
const client = new Discord.Client()

// The bot is ready
client.on('ready', () => {
  console.log('Bot Started')
})


client.login(process.env.BOT_TOKEN)

bot.on('message', message => { // when message is sent
    if (message.content ===("<>")){ // when message is !bot
        message.channel.sendMessage("Shinies!"); // send running message into the channel where the message was sent
    }
});
