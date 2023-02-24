const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const akaneko = require('akaneko');

const cmdName = "mobilewallpaper"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("モバイル用背景の画像を取得する。")
  
	.addStringOption(option => option
		.setName('nsfwcheck')
			.setDescription('NSFW画像にしますか。')
			.setRequired(true)
			.addChoices(
				{ name: 'True', value: 'true' },
				{ name: 'False', value: 'false' },
        )),
  
    async execute(i, client) {

const sfw = await akaneko.mobileWallpapers();

const sfwEmbed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('Download Link')
	.setURL(sfw)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription('モバイル用の背景')
	.setImage(sfw)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });

const nsfw = await akaneko.nsfw.mobileWallpapers();
      
const nsfwEmbed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('Download Link')
	.setURL(nsfw)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription('Hなモバイル用の背景')
	.setImage(nsfw)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });


if (i.options.getString('nsfwcheck') === 'true') {
if (i.channel.nsfw) {

			await i.reply({ embeds: [nsfwEmbed] })
} else {
	 i.reply({ content: 'NSFWチャンネルではないので、このコマンドは使用できません。', ephemeral: true });
}
}
if (i.options.getString('nsfwcheck') === 'false') {

			await i.reply({ embeds: [sfwEmbed] })
}
    }
}