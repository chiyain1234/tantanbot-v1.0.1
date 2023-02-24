const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require('discord.js');
const { QueryType } = require('discord-player');
const cmdName = "play"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName("play")
		.setDescription("音楽を再生します。")
		.addSubcommand((subcommand) =>
			subcommand
				.setName("song")
				.setDescription("URLから曲を読み込みます。")
				.addStringOption((option) => option.setName("url").setDescription("URLを入力して下さい。").setRequired(true))
		)
		.addSubcommand((subcommand) =>
			subcommand
				.setName("playlist")
				.setDescription("プレイリストのURLから曲を読み込みます。")
				.addStringOption((option) => option.setName("url").setDescription("URLを入力して下さい。").setRequired(true))
		)
		.addSubcommand((subcommand) =>
			subcommand
				.setName("search")
				.setDescription("キーワードから曲を読み込みます。")
				.addStringOption((option) =>
					option.setName("searchterms").setDescription("キーワードを入力してください。").setRequired(true)
				)
		),
  
    async execute(interaction, client) {

	},
}