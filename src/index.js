/* Unban all 
const Discord = require('discord.js');
const { Client, MessageEmbed, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
require('dotenv').config();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('messageCreate', async (message) => {
  if (message.content == '!unban') {
      const guild = client.guilds.cache.get('1068979857519824977');
      let count = 0;
      try {
          guild.bans.fetch().then(async (i) => {
              message.channel.send(`Fetched ban list with ${i.size} entries.`);
              const ids = i.map((u) => u.user.id);
              ids.forEach(async (id) => {
                  await guild.members.unban(id, 'Given another chance.').then(async (u) => {
                    message.channel.send(`Unbanned: **${u.tag}** | **(${u.id})**`);
                      count++;
                  });
              });
              
          });
      } catch (error) {
          console.error(error);
      }
  }
});

client.login(process.env.TOKEN);*/




