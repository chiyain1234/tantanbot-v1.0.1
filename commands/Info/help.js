const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const { MessageEmbed,MessageActionRow, MessageSelectMenu,CommandInteraction} = require('discord.js');

module.exports = {
      guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false, // 管理者用サーバー専用かどうか
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName("0-help")
        .setDescription("コマンドリストを表示する。"),

	async execute(i, client) {
    let helpMenu = new MessageActionRow()
          .addComponents(
      new MessageSelectMenu()
      .setCustomId("commandlist")
      .setPlaceholder('Command List')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: "1. サーバー管理",
          value: "server",
          emoji: "<:1_:1078189924005716048>",
          description: "1ページ目: サーバー管理に関するコマンド一覧"
        },
        {
          label: "2. ランダム画像",
          value: "img",
          emoji: " <:2_:1078190441784168560>",
          description: "2ページ目: ランダムに画像生成するコマンド一覧"
        },
        {
          label: "3. 画像生成",
          value: "imgen",
          emoji: " <:3_:1078190790871883806>",
          description: "3ページ目: 画像を編集するコマンド一覧"
        },
        {
          label: "4. 娯楽",
          value: "fun",
          emoji: " <:4_:1078190984011186227>",
          description: "4ページ目: 娯楽に関するコマンド一覧"
        },
        {
          label: "5. 情報",
          value: "info",
          emoji: " <:5_:1078191093180551218>",
          description: "5ページ目: 情報に関するコマンド一覧"
        },
        {
          label: "6. テキスト",
          value: "text",
          emoji: "<:6_:1078191394834886736>",
          description: "6ページ目: テキストに関するコマンド一覧"
        },
        {
          label: "7. 実用",
          value: "utility",
          emoji: "<:7_:1078191600594858094>",
          description: "7ページ目: 実用的なコマンド一覧"
        },
        {
          label: "8. サウンド",
          value: "voice",
          emoji: "<:8_:1078191711345463378>",
          description: "8ページ目: サウンドコマンド一覧"
        }
      ])
)
    let cmdinfo = new MessageActionRow()
          .addComponents(
      new MessageSelectMenu()
      .setCustomId("cmdinfo")
      .setPlaceholder('Command Usage')
      .setMinValues(1)
      .setMaxValues(1)
      .setDisabled(true)
      .addOptions([
        {
          label: "...",
          value: "test",
        },
      ])
)
        let helps = new MessageActionRow()
          .addComponents(
      new MessageSelectMenu()
      .setCustomId("operation")
      .setPlaceholder('Operation')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: "ホームに戻る",
          value: "home",
          emoji: "<:home:1078192078506426538>",
        },
        {
          label: "メニューをピン止め",
          value: "kote",
          emoji: "<:pin:1078194737804222534>",
        },
        {
          label: "メニューを削除",
          value: "delete",
          emoji: "<:delete:1078194420526096404>",
        },
        {
          label: "メニューをロック",
          value: "lock",
          emoji: "<:lock:1078192182894276669>",
        },
        {
          label: "メニューをアンロック",
          value: "unlock",
          emoji: "<:unlock:1078194660654198899>",
        },
        {
          label: "ボットの招待リンク",
          value: "botlink",
          emoji: "<:link:1078195575729692682>",
        },
        {
          label: "サポートサーバーの招待リンク",
          value: "support",
          emoji: "<:server:1078195612941557850>",
        },
        {
          label: "利用規約",
          value: "kiyaku",
          emoji: "<:kiyaku:1078198310994718770>",
        },
      ])
)
    
let helpEmbed = new MessageEmbed()
    .setTitle('ヘルプメニュー')
    .setDescription('オプションを選択してください。')
      .addField("**Command List**" , `コマンドのカテゴリーを表示する。`, false)
        .addField("**Command Usage**" , `コマンドの使用方法を表示する。`, false)
          .addField("**Operation**" , `ヘルプメニューの操作を行う。`, false)
    .setColor(client.config.color)
      .setImage("https://media.discordapp.net/attachments/1001354677226590308/1007161250263875654/IMG_5674.gif")
    	.setTimestamp()
    	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setFooter({ text: i.toString(), iconURL: '' });

    const msg = i.reply({ embeds: [helpEmbed], components: [helpMenu, cmdinfo, helps] })

    }
}