const { Player } = require('discord-player');

const Discord = require("discord.js") 
const fs = require("fs") 

const config = require("./config.js");
const functions = require("./functions.js");

const client = new Discord.Client({ 
  intents: [
    Discord.Intents.FLAGS.GUILDS, 
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,	
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    Discord.Intents.FLAGS.GUILD_WEBHOOKS,
    Discord.Intents.FLAGS.GUILD_INVITES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ], 
  ws: { 
    properties: { 
      $browser: "Discord iOS" 
    } 
  }
});

module.exports = client;

const player = client.player

client.setMaxListeners(0);
client.commands = new Discord.Collection()
client.cooldowns = new Discord.Collection()
client.queues = new Discord.Collection()

client.player = new Player(client, {
    ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25
    }
})
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions } = require('discord.js');


// スラッシュコマンドハンドリング
const commandFolders = fs.readdirSync("./commands");
for (const folder of commandFolders) {
    console.log(`\u001b[35m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${folder} commands
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\u001b[0m`);
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        try {
            client.commands.set(command.data.name, command);
            console.log(`✅|${command.data.name}`);
        } catch (error) {
            console.log(`\u001b[31m⛔️|${command.data.name}\nエラー内容\n ${error}\u001b[0m`);
        }
    }
    console.log(`\u001b[35m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${folder} loaded
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\u001b[0m`);
}

// インタラクションハンドリング
const intFolders = fs.readdirSync("./interactions");
for (const intfolder of intFolders) {
    const intFiles = fs.readdirSync(`./interactions/${intfolder}`).filter(intfile => intfile.endsWith(".js"));
    for (const intfile of intFiles) {
        const inter = require(`./interactions/${intfolder}/${intfile}`);
    if (inter.once) {
        try {
            client.once(inter.name, (...args) => inter.run(...args, client));
        } catch (error) {
            console.error(`\u001b[31m[${yuika.timeToJST(Date.now(), true)}]\u001b[0m\n`, error)
        }
    } else {
        try {
            client.on(inter.name, (...args) => inter.run(...args, client));
        } catch (error) {
            console.error(`\u001b[31m[${yuika.timeToJST(Date.now(), true)}]\u001b[0m\n`, error)
        }
    }
}
}


// イベントハンドリング
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        try {
            client.once(event.name, (...args) => event.run(...args, client));
        } catch (error) {
            console.error(`\u001b[31m[${yuika.timeToJST(Date.now(), true)}]\u001b[0m\n`, error)
        }
    } else {
        try {
            client.on(event.name, (...args) => event.run(...args, client));
        } catch (error) {
            console.error(`\u001b[31m[${yuika.timeToJST(Date.now(), true)}]\u001b[0m\n`, error)
        }
    }
}

// メッセージハンドリング
const messageFiles = fs.readdirSync("./messages").filter(file => file.endsWith(".js"));
for (const file of messageFiles) {
    const message = require(`./messages/${file}`);
    if (message.once) {
        try {
            client.once(message.name, (...args) => message.run(...args, client));
        } catch (error) {
            console.error(`\u001b[31m[${yuika.timeToJST(Date.now(), true)}]\u001b[0m\n`, error)
        }
    } else {
        try {
            client.on(message.name, (...args) => message.run(...args, client));
        } catch (error) {
            console.error(`\u001b[31m[${yuika.timeToJST(Date.now(), true)}]\u001b[0m\n`, error)
        }
    }
}

process.on("uncaughtException", error => {
    console.error(`[${functions.timeToJST(Date.now(), true)}] ${error.stack}`);
    const embed = new Discord.MessageEmbed()
        .setTitle("ERROR - uncaughtException")
        .setDescription("```\n" + error.stack + "\n```")
        .setColor("RED")
        .setTimestamp();
    client.channels.fetch(config.logch.error).then(c => c.send({ embeds: [embed] }));
});
process.on("unhandledRejection", (reason, promise) => {
    console.error(`\u001b[31m[${functions.timeToJST(Date.now(), true)}] ${reason}\u001b[0m\n`, promise);
    const embed = new Discord.MessageEmbed()
        .setTitle("ERROR - unhandledRejection")
        .setDescription("```\n" + reason + "\n```")
        .setColor("RED")
        .setTimestamp();
    client.channels.fetch(config.logch.error).then(c => c.send({ embeds: [embed] }));
});


const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);

if(process.env.TOKEN){
client.login(process.env.TOKEN).catch(e => {
console.log("The Bot Token You Entered Into Your Project Is Incorrect Or Your Bot's INTENTS Are OFF!")
})
} else {
console.log("Please Write Your Bot Token Opposite The Token In The .env File In Your Project!")
}


client.login(config.token) 

