const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require('discord.js');
const { QueryType, QueueRepeatMode, QueueFilters } = require('discord-player');
const cmdName = "filter"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
		.setDescription("曲にフィルターをかける")
        	.addStringOption(option => option
		.setName('type')
			.setDescription('どの種類にしますか。')
			.setRequired(true)
       .addChoices(
          	{ name: '8D', value: '8D' },
    	  		{ name: 'bassboost', value: 'bassboost' },
    	  		{ name: 'bassboost_high', value: 'bassboost_high' },
    	  		{ name: 'bassboost_low', value: 'bassboost_low' },
    	  		{ name: 'chorus', value: 'chorus' },
    	  		{ name: 'chorus2d', value: 'chorus2d' },
    	  		{ name: 'chorus3d', value: 'chorus3d' },
    	  		{ name: 'compressor', value: 'compressor' },
    	  		{ name: 'dim', value: 'dim' },
    	  		{ name: 'subboost', value: 'subboost' },
    	  		{ name: 'expander', value: 'expander' },
    	  		{ name: 'fadein', value: 'fadein' },
    	  		{ name: 'vaporwave', value: 'vaporwave' },
    	  		{ name: 'tremolo', value: 'tremolo' },
    	  		{ name: 'haas', value: 'haas' },
    	  		{ name: 'mcompand', value: 'mcompand' },
    	  		{ name: 'mono', value: 'mono' },
    	  		{ name: 'mstlr', value: 'mstlr' },
    	  		{ name: 'mstrr', value: 'mstrr' },
    	  		{ name: 'nightcore', value: 'nightcore' },
    	  		{ name: 'treble', value: 'treble' },
    	  		{ name: 'softlimiter', value: 'softlimiter' },
    	  		{ name: 'earrape', value: 'earrape' },
    	  		{ name: 'vibrato', value: 'vibrato' },
    	  		{ name: 'surrounding', value: 'surrounding' },
          )),
  
    async execute(interaction, client) {

}
}