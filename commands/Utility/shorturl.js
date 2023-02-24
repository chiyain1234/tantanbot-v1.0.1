const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
var isgdApi = require("isgd-api");
const cmdName = "shorturl"
var validUrl = require('valid-url');
var shortUrl = require("node-url-shortener");
const turl = require('turl');

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("URLをショートURLにする。")
	      .addStringOption(option => option.setName('url')
			.setDescription('URLを入力してください。')
			.setRequired(true))

	.addStringOption(option => option
		.setName('app')
			.setDescription('短縮を行うアプリケーションを選択してください。')
      .setRequired(true)
			.addChoices(
				{ name: 'is.gd', value: 'is.gd' },
        	{ name: 'cdpt.in', value: 'cdpt.in' },
        	{ name: 'tinyurl', value: 'tiny' },
        
        )),
  
    async execute(i, client) {
var res1 = i.options.getString('url')
      
if (validUrl.isUri(res1)){
  
  if(i.options.getString('app') === "is.gd"){
 const link = await isgdApi.shorten(res1)
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`isgd:\n短縮URLを生成しました。\n元URL:${res1}`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`生成したURL:\n${link}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			await i.reply({ embeds: [Embed] })
    
}

else if(i.options.getString('app') === "cdpt.in"){
shortUrl.short(res1, function (err, link) {
    
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`cdpt:\n短縮URLを生成しました。\n元URL:${res1}`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`生成したURL:\n${link}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			 i.reply({ embeds: [Embed] })
})
}
  
  if(i.options.getString('app') === "tiny"){
turl.shorten(res1).then((link) => {  
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`tinyurl:\n短縮URLを生成しました。\n元URL:${res1}`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`生成したURL:\n${link}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			 i.reply({ embeds: [Embed] })
})
}
  
} else {
    const Deembed = new MessageEmbed()
            .setTitle("エラー")
            .setDescription(`これはURLでありません。`)
            .setColor("RED");
        i.reply({embeds: [Deembed], ephemeral: true })
}
      

}
    }
