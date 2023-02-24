const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')

const cmdName = "qrcode"
var validUrl = require('valid-url');

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("URLをQRコードにする。")
	      .addStringOption(option => option.setName('url')
			.setDescription('URLを入力してください。')
			.setRequired(true)),
  
    async execute(i, client) {
var url = i.options.getString('url')
      
if (validUrl.isUri(url)){
  
  const uri = `https://api.qrserver.com/v1/create-qr-code/?size=4096x4096&data=${url}`
var res1 = encodeURI(uri);

const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`QRコードを生成しました。\nURL: `)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`${url}`)
          .setImage(`${res1}}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			await i.reply({ embeds: [Embed] })
} 
else {
    const Deembed = new MessageEmbed()
            .setTitle("エラー")
            .setDescription(`これはURLでありません。`)
            .setColor("RED");
        i.reply({embeds: [Deembed], ephemeral: true })
}
      

}
    }