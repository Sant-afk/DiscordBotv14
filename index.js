const { Client, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
});
const config = require("./config.json");

client.on("ready", () => {
  console.log("Bot conectado");
});

client.login(config.token);
