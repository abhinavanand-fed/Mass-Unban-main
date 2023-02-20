const Discord = require('discord.js');
const { Client, MessageEmbed, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
require('dotenv').config();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.content == '!unmuteall') {
      const guild = client.guilds.cache.get('1068979857519824977');
      const mutedRole = guild.roles.cache.find(role => role.name === 'Muted');
      if (!mutedRole) {
        console.log(`Error: Muted role not found in server`);
        return;
      }
      guild.members.fetch().then(async (members) => {
        members.forEach(async (member) => {
          if (member.roles.cache.has(mutedRole.id)) {
            await member.roles.remove(mutedRole);
            console.log(`Unmuted: ${member.user.tag}`);
          }
        });
      }).catch((error) => {
        console.log(`Error fetching server members: ${error}`);
      });
    }
  });

client.login(process.env.TOKEN);
