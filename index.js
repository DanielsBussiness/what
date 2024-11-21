require('dotenv').config(); // Load environment variables from the .env file
const { Client } = require("discord.js-selfbot-v13");

// Get the token from the environment variable
const token = process.env.DISCORD_TOKEN;

const client = new Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log("Self-bot is now running!");
});

// Example: Respond to specific messages
client.on("messageCreate", async (message) => {
    if (message.author.bot) return; // Ignore bot messages

    // Respond to "hello"
    if (message.content.toLowerCase() === "hello") {
        await message.channel.send("Hi there!");
    }
});

// Log in using the user token
client.login(token);
