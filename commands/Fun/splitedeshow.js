const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');

const cmdName = "splitedeshow"

module.exports = {
    guildOnly: false,
    adminGuildOnly: false,
    data: new SlashCommandBuilder()
        .setName(cmdName)
        .setDescription("Super Idol的笑容 都没你的甜"),
                
async execute(i, client) {

const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
  .setDescription('スプライトでしょ ドゥン　ドミニ―　で転売　丁度４語　ドミニ― 4・4 具合悪い toダニ DDチンちょな 蒸留水')
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' })
  .setImage("https://cdn.discordapp.com/attachments/1001354677226590308/1076797030367764490/super-idol-social-credits.gif")
  i.reply({ embeds: [Embed] });  

 }
}