const express = require('express');
const { Client } = require("discord.js");
const client = new Client({ intents: 123 });

const app = express();
const botToken = '-';

client.login(botToken);

app.get('/counts', (req, res) => {
  const guildCount = client.guilds.cache.size;
  const memberCount = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);
  res.json({ guildCount, memberCount });
});

app.listen(3000, () => {
  console.log('Count Server started on port 3000');
});
