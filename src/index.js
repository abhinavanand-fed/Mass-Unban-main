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
                  await guild.members.unban(id, 'Your Reason Here!').then(async (u) => {
                    message.channel.send(`Unbanned: ${u.tag}`);
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

/*Unmute all
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
        message.channel.send(`Fetched ${members.size} members.`);
          let count = 0;
          members.forEach(async (member) => {
              if (member.roles.cache.has(mutedRole.id)) {
                  await member.roles.remove(mutedRole);
                  message.channel.send(`Unmuted: ${member.user.tag}`);
                  count++;
              }
          });
      }).catch((error) => {
        message.channel.send(`Error fetching server members: ${error}`);
      });
  }
});

client.login(process.env.TOKEN);*/

