const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')
const translate = require("translatte")
const weather = require("weather-js");
const cmdName = "f"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("チャンネル最初のメッセージを取得する。"),
  
async execute(i, client) {
  
    const fetchMessages = await i.channel.messages.fetch({
      after: 1,
      limit: 1,
    });
    const msg = fetchMessages.first();
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`${i.channel.name} の最初のメッセージ`)
  .setURL(msg.url)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  
  i.reply({ embeds: [Embed] });  
  }
}