const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageSelectMenu } = require('discord.js');
const fs = require("fs") // Import FS to read event files

client.on("interactionCreate", async (i, client) => {

    if (i.customId === "serverCmd") {
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
      .setCustomId("serverCmd")
      .setPlaceholder('Command Usage')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: "/addrole",
          description: "指定した人にロールを付ける。",
          value: "addrole",
        },
        {
          label: "/clear",
          description: "指定した数だけメッセージを消す。",
          value: "clear",
        },
        {
          label: "/createbutton",
          description: "ボタンを作成する。",
          value: "createbutton",
        },
        {
          label: "/createchannel",
          description: "チャンネルを作成する。",
          value: "createchannel",
        },
        {
          label: "/createembed",
          description: "埋め込みメッセージを作成する。",
          value: "createembed",
        },
        {
          label: "/createfreechannel",
          description: "フリーチャンネル作成パネルを作成する。",
          value: "createfreechannel",
        },
        {
          label: "/dm",
          description: "指定した人にダイレクトメッセージを送る。",
          value: "dm",
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

        if (i.values[0] === "addrole") {
            await i.deferUpdate()
          
            const addroleEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`addrole`)
	.setDescription("```\n" + `/addrole user: @User role: @Role` + "\n```")
    .addField("Info" , `指定した人にロールをつける。`, true)
   .addField("Usage" , "```\n" + `/addrole user: @Bob role: @visitor` + "\n```", true)
   .addField("Command" , "</addrole:1001983896600203295>", true)
     .addField("Permissions" , `User: ロールの管理\nBot: 管理者`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
    
      await msg.edit({ embeds: [addroleEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
    else if (i.values[0] === "createbutton") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`createbutton`)
	.setDescription("```\n" + `/createbutton` + "\n```")
    .addField("Info" , `ボタンを作成する。`, true)
   .addField("Usage" , "```\n" + `/createbutton` + "\n```", true)
  .addField("Modal" , `URL: http, https `, true)
  .addField("Command" , "</createbutton:1000981759007146025>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

          else if (i.values[0] === "clear") {
            await i.deferUpdate()
          
            const clearEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`clear`)
	.setDescription("```\n" + `/clear amount: 1-100` + "\n```")
    .addField("Info" , `指定した数だけメッセージを消す。`, true)
   .addField("Usage" , "```\n" + `/clear amount: 2` + "\n```", true)
   .addField("Command" , "</clear:998920719381581922>", true)
     .addField("Permissions" , `User: メッセージの管理\nBot: メッセージの管理`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
    
      await msg.edit({ embeds: [clearEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

                else if (i.values[0] === "createchannel") {
            await i.deferUpdate()
          
            const ccEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`createchannel`)
	.setDescription("```\n" + `/createchannel name: NAME` + "\n```")
    .addField("Info" , `チャンネルを作成する。`, true)
   .addField("Usage" , "```\n" + `/createchannel name: chat` + "\n```", true)
   .addField("Command" , "</createchannel:1003288884785979442>", true)
     .addField("Permissions" , `User: チャンネルの管理\nBot: チャンネルの管理`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
    
      await msg.edit({ embeds: [ccEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

                else if (i.values[0] === "createembed") {
            await i.deferUpdate()
          
            const ccEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`createembed`)
	.setDescription("```\n" + `/createembed` + "\n```")
    .addField("Info" , `埋め込みメッセージを作成する。`, true)
   .addField("Usage" , "```\n" + `/createembed` + "\n```", true)
   .addField("Command" , "</createembed:998920719465447475>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
    
      await msg.edit({ embeds: [ccEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
                      else if (i.values[0] === "createfreechannel") {
            await i.deferUpdate()
          
            const ccEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`createfreechannel`)
	.setDescription("```\n" + `/createfreechannel` + "\n```")
    .addField("Info" , `フリーチャンネル作成パネルを作成する。`, true)
   .addField("Usage" , "```\n" + `/createfreechannel` + "\n```", true)
   .addField("Command" , "</createfreechannel:1007817423904313445>", true)
     .addField("Permissions" , `User: 管理者\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
    
      await msg.edit({ embeds: [ccEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

                            else if (i.values[0] === "dm") {
            await i.deferUpdate()
          
            const ccEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`dm`)
	.setDescription("```\n" + `/dm user: @User text: TEXT` + "\n```")
    .addField("Info" , `指定した人にダイレクトメッセージを送る。`, true)
   .addField("Usage" , "```\n" + `/dm user: @Bob text: Hello` + "\n```", true)
   .addField("Command" , "</dm:1008600244738588702>", true)
     .addField("Permissions" , `User: 管理者\nBot: 無し`, true)
	.setTimestamp()
          
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
    
      await msg.edit({ embeds: [ccEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

    }
        })