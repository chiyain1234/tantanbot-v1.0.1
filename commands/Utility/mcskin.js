const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')

const cmdName = "mcskin"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("マインクラフトのスキンの画像を取得する。")
	      .addStringOption(option => option.setName('text')
			.setDescription('検索ワードを入力してください。')
			.setRequired(true)),
    async execute(i, client) {
var text = i.options.getString('text')

const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`Minecraft | 検索結果: `)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`${text}`)
.setThumbnail(`https://minotar.net/download/${text}`)
          .setImage(`https://minotar.net/armor/body/${text}.png`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			await i.reply({ embeds: [Embed] })
}
    }