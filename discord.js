const openApiKey = process.env['OpenAPIKey']
const discordKey = process.env['DiscordKey']
const openAIOrg = process.env['OpenAIOrg']

const { Client, Intents } = require('discord.js');

const client = new Client({
  intents: [
    Intents.FLAGS.Guilds,
    Intents.FLAGS.GuildMessages,
    Intents.FLAGS.MessageContent
  ]
})

client.on('messageCreate', async (message) => {
  try{
    if (message.author.bot) return // Prevents infinite loop
    console.log(message.content)
  } catch(error){
    console.log(error)
  }
})

client.login(discordKey);
