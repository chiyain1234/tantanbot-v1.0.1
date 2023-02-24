const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require('discord.js');
const { QueryType, QueueRepeatMode } = require('discord-player');
const cmdName = "loop"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
		.setDescription("曲をループする。")
        	.addStringOption(option => option
		.setName('type')
			.setDescription('ループにしますか。')
			.setRequired(true)
       .addChoices(
          	{ name: 'ON', value: 'on' },
    	  		{ name: 'OFF', value: 'off' },
          )),
  
    async execute(interaction, client) {

}
}