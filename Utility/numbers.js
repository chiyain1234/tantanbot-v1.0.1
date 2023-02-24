const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const axios = require('axios')
const translate = require("translatte")

const cmdName = "numbers"

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("数字にに関する豆知識を取得する。"),
                
async execute(i, client) {

var uri = `http://numbersapi.com/random/trivia`;
var res1 = encodeURI(uri);

      let getuni = async () => {
        let response = await axios.get(
          `${res1}`
          );
        let uni = response.data;
        return uni;
      };
    let uniValue = await getuni();
  
translate(uniValue, {from: "auto", to: "ja"}).then(async res=>{
        
const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`数字に関する豆知識`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
      .setDescription(`${res.text.substr(0, 2000)}`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
  
  i.reply({ embeds: [Embed] });  
})  .catch(err => {
        if (err.name === 'AxiosError') {
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle('エラー')
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setDescription(`取得出来ませんでした。`)
	.setTimestamp()
	.setFooter({ text: `/${cmdName}`, iconURL: '' });
			return i.reply({ embeds: [Embed] })
        }
  }
 ) }
}