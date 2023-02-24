const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require('discord.js');
const { QueryType, QueueRepeatMode, QueueFilters } = require('discord-player');
const cmdName = "removefilter"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
		.setDescription("フィルターを解除する。")
        ,
  
    async execute(interaction, client) {

}
}