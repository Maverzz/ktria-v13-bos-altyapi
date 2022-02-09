const { Client, Collection, Intents } = require('discord.js');
const { readdirSync } = require("fs");   
const { join } = require("path");
const ayar = require('./ktrias1.json');
const client = global.client = new Client()

client.commands = new Collection();
const commandsdosyası = fs.readdirSync(`./komutlar`).filter(file => file.endsWith('.js'));
for (const file of commandsdosyası) {
const komutlar = require(`./komutlar/${file}`);
client.commands.set(komutlar.name, komutlar);
}

client.login(ayar.ktoken)