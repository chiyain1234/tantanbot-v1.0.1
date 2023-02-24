const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageSelectMenu } = require('discord.js');
const fs = require("fs") // Import FS to read event files

client.on("interactionCreate", async (i, client) => {

    if (i.customId === "infoCmd") {
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
      .setCustomId("infoCmd")
      .setPlaceholder('Command Usage')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: "/avatar",
          description: "指定したユーザーのアバターを取得する。",
          value: "avatar",
        },
        {
          label: "/banner",
          description: "指定したユーザーのバーナーを取得する。",
          value: "banner",
        },             
        {
          label: "/bot",
          description: "TanTanBotの情報を見る。",
          value: "bot",
        },
        {
          label: "/help",
          description: "コマンドリストを表示する。",
          value: "help",
        },
        {
          label: "/ping",
          description: "ping値を測定。",
          value: "ping",
        },
        {
          label: "/randomavatar",
          description: "ボットが確認できるユーザーの中からランダムにアバターを取得する。",
          value: "randomavatar",
        },
        {
          label: "/server",
          description: "サーバーの情報を取得する。",
          value: "server",
        },
        {
          label: "/user",
          description: "指定したユーザーの情報を取得する。",
          value: "user",
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

        if (i.values[0] === "avatar") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`avatar`)
	.setDescription("```\n" + `/avatar user: @User` + "\n```")
    .addField("Info" , `指定したユーザーのアバターを取得する。`, true)
   .addField("Usage" , "```\n" + `/avatar user: @Bob` + "\n```", true)
   .addField("Command" , "</avatar:1004259518282223677>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })   
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
        if (i.values[0] === "banner") {
          await i.deferUpdate()
   
         const joinEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`banner`)
.setDescription("```\n" + `/banner user_id: USER_ID` + "\n```")
 .addField("Info" , `指定したユーザーのバーナーを取得する。`, true)
.addField("Usage" , "```\n" + `/banner user_id: 0` + "\n```", true)
.addField("Command" , "</banner:1018316659146113144>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })   
   await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
     }

     if (i.values[0] === "bot") {
      await i.deferUpdate()

     const joinEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`bot`)
.setDescription("```\n" + `/bot` + "\n```")
.addField("Info" , `TanTanBotの情報を見る。`, true)
.addField("Usage" , "```\n" + `/bot` + "\n```", true)
.addField("Command" , "</bot:1018359124263698503>", true)
.addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })   
await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
 }

 if (i.values[0] === "randomavatar") {
  await i.deferUpdate()

 const joinEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`avatrandomavatarar`)
.setDescription("```\n" + `/randomavatar` + "\n```")
.addField("Info" , `ボットが確認できるユーザーの中からランダムにユーザーのアバターを取得する。`, true)
.addField("Usage" , "```\n" + `/randomavatar` + "\n```", true)
.addField("Command" , "</randomavatar:1018407688276807680>", true)
.addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })   
await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
}

     if (i.values[0] === "help") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`help`)
	.setDescription("```\n" + `/help` + "\n```")
    .addField("Info" , `ヘルプを表示する。`, true)
   .addField("Usage" , "```\n" + `/help` + "\n```", true)
 .addField("Command" , "</0-help:1009644217078915073>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

        if (i.values[0] === "ping") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`ping`)
	.setDescription("```\n" + `/ping` + "\n```")
    .addField("Info" , `PING値を測定する。`, true)
   .addField("Usage" , "```\n" + `/ping` + "\n```", true)
   .addField("Command" , "</ping:998920719268323361>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "server") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`server`)
	.setDescription("```\n" + `/server` + "\n```")
    .addField("Info" , `サーバーの情報を取得する。`, true)
   .addField("Usage" , "```\n" + `/server` + "\n```", true)
   .addField("Command" , "</server:1018514294691856454>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

        if (i.values[0] === "user") {
          await i.deferUpdate()
   
         const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`user`)
.setDescription("```\n" + `/user user: USER` + "\n```")
 .addField("Info" , `指定したユーザーの情報を取得する。`, true)
.addField("Usage" , "```\n" + `/user user: @Bob ` + "\n```", true)
.addField("Command" , "</user:1017775664704790538>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
    
           
   await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
     }

    }
        })