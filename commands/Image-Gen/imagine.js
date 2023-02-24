const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment, MessageActionRow } = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");
const cmdName = "imagine"
const configuration = new Configuration({
  apiKey: process.env.openai,
});
const openai = new OpenAIApi(configuration);

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("AIによる画像生成を行う。")
      
    .addStringOption((option) =>
      option
        .setName("prompt")
        .setDescription("テキストを入力してください。")
        .setRequired(true)),
    async execute(i, client) {

var prompt = i.options.getString('prompt');
      
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    const imageUrl = response.data.data[0].url;
  
      const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setTitle(`${prompt}`)
	.setImage(imageUrl)
	.setTimestamp()
	.setFooter({ text: i.toString(), iconURL: '' });

			await i.reply(imageUrl)
  
}
    }