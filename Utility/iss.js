const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')

const cmdName = "iss"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("ISS（国際宇宙ステーション）の現在位置を取得する。"),
  
    async execute(i, client) {

      let getuni = async () => {
        let response = await axios.get(
          'http://api.open-notify.org/iss-now.json'
          );
        let uni = response.data;
        return uni;
      };
    let uniValue = await getuni();
      
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`ISSの位置情報を取得しました。`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription("```\n" + `TimeStamp: ${uniValue.timestamp}\nMessage: ${uniValue.message}\n緯度: ${uniValue.iss_position.latitude}\n経度: ${uniValue.iss_position.longitude}` + "\n```")
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			await i.reply({ embeds: [Embed] })
}
    }