const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageSelectMenu } = require('discord.js');
const fs = require("fs") // Import FS to read event files

client.on("interactionCreate", async (i, client) => {

    if (i.customId === "voiceCmd") {
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
              .setCustomId("voiceCmd")
              .setPlaceholder('Command Usage')
              .setMinValues(1)
              .setMaxValues(1)
              .addOptions([
                {
                  label: "/join",
                  description: "ボットが指定したボイスチャンネルに接続する。",
                  value: "join",
                },
                {
                  label: "/leave",
                  description: "ボットがボイスチャンネルから切断する。",
                  value: "leave",
                },
                {
                  label: "/together",
                  description: "ボイスチャンネルでTogetherする。",
                  value: "together",
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
      
let msg = await i.channel.messages.fetch(i.message.id)

        if (i.values[0] === "join") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`join`)
	.setDescription("```\n" + `/join channel: #VOICE` + "\n```")
    .addField("Info" , `ボットが指定したボイスチャンネルに接続する。`, true)
   .addField("Usage" , "```\n" + `/join channel: Voice` + "\n```", true)
   .addField("Command" , "</join:1003935406259183636>", true)
     .addField("Permissions" , `User:  無し\nBot: 接続`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "leave") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`leave`)
	.setDescription("```\n" + `/leave` + "\n```")
    .addField("Info" , `ボットがボイスチャンネルから切断する。`, true)
   .addField("Usage" , "```\n" + `/leave` + "\n```", true)
   .addField("Command" , "</leave:1003944031279128586>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })               
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

        if (i.values[0] === "together") {
          await i.deferUpdate() 
         const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`together`)
.setDescription("```\n" + `/together` + "\n```")
 .addField("Info" , `ボイスチャンネルでTogetherする。`, true)
.addField("Usage" , "```\n" + `/together` + "\n```", true)
.addField("Command" , "</together:1017708030982373416>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })               
   await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
     }

      
    }
        })