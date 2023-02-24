const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require('discord.js');
const { QueryType } = require('discord-player');
const cmdName = "queue"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
		.setDescription("現在のキューを表示する。")  
    .addNumberOption((option) => option.setName("page").setDescription("キューのページ数").setMinValue(1)),
  
    async execute(interaction, client) {

    }
}