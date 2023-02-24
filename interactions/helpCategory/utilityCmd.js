const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageSelectMenu } = require('discord.js');
const fs = require("fs") // Import FS to read event files

client.on("interactionCreate", async (i, client) => {

    if (i.customId === "utilityCmd") {
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
       .setCustomId("utilityCmd")
       .setPlaceholder('Command Usage')
     .setMinValues(1)
       .setMaxValues(1)
      .addOptions([
        {
          label: "/appstore",
          description: "AppStoreの情報を取得する。",
          value: "appstore",
        },
        {
         label: "/bibun",
         description: "微分する。",
         value: "bibun",
        },
         {
        label: "/calc",
        description: "計算をする。",
        value: "calc",
        },
          {
        label: "/calculator",
        description: "計算機を使う。",
        value: "calculator",
        },
         {
       label: "/covid",
       description: "コロナに関する情報を取得する。",
       value: "covid",
        },
        {
        label: "/discordstatus",
        description: "Discordのステータスを取得する。",
        value: "discordstatus",
         },
       {
        label: "/f",
        description: "チャンネル最初のメッセージを取得する。",
        value: "f",
         },
      {
            label: "/iss",
            description: "ISS（国際宇宙ステーション）の現在位置を取得する。",
          value: "iss",
        },
       {
          label: "/mcskin",
          description: "マインクラフトのスキンの画像を取得する。",
          value: "mcskin",
        },
       {
         label: "/numbers",
         description: "数字に関する豆知識を取得する。",
       value: "numbers",
         },
        {
       label: "/pagescreenshot",
       description: "URLのスクショ画像を取得する。",
      value: "pagescreenshot",
          },
           {
       label: "/qrcode",
       description: "URLをQRにする。",
        value: "qrcode",
        },
        {
           label: "/translate",
           description: "翻訳する。",
          value: "translate",
      },
      {
     label: "/urlshorten",
     description: "URLをショートURLにする。",
       value: "urlshorten",
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

        if (i.values[0] === "appstore") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`appstore`)
	.setDescription("```\n" + `/appstore` + "\n```")
    .addField("Info" , `AppStoreの情報を取得する。`, true)
   .addField("Usage" , "```\n" + `/appstore` + "\n```", true)
   .addField("Command" , "</appstore:1003935406259183637>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "bibun") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`bibun`)
	.setDescription("```\n" + `/bibun 関数: FUNCTION 値: VALUE` + "\n```")
    .addField("Info" , `微分する。`, true)
   .addField("Usage" , "```\n" + `/bibun 関数: 2x^2+2x+1 値: x` + "\n```", true)
   .addField("Command" , "</bibun:1001366380899221585>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

        if (i.values[0] === "calc") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`calc`)
	.setDescription("```\n" + `/calc 計算式: FORMULA` + "\n```")
    .addField("Info" , `計算をする。`, true)
   .addField("Usage" , "```\n" + `/calc 計算式: 1×1` + "\n```", true) 
              .addField("Point" , "×や÷、*や/が使用できます。", true)
              .addField("Command" , "</calc:1001366380899221586>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "covid") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`covid`)
	.setDescription("```\n" + `/covid 国名: COUNTRY` + "\n```")
    .addField("Info" , `コロナに関する情報を取得する。`, true)
   .addField("Usage" , "```\n" + `/covid 国名: 日本` + "\n```", true)
    .addField("Point" , "韓国の情報を取得する場合は南朝鮮と入力して実行してください。🤔", true)
    .addField("Command" , "</covid:998920719381581923>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

        if (i.values[0] === "discordstatus") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`discordstatus`)
	.setDescription("```\n" + `/discordstatus` + "\n```")
    .addField("Info" , `ディスコードのステータスを取得する。`, true)
   .addField("Usage" , "```\n" + `/discordstatus` + "\n```", true)
   .addField("Command" , "</discordstatus:998920719197012063>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "f") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`f`)
	.setDescription("```\n" + `/f` + "\n```")
    .addField("Info" , `チャンネル最初のメッセージを取得する。`, true)
   .addField("Usage" , "```\n" + `/f` + "\n```", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
     .addField("Command" , "</f:1003823535841607810>", true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

        if (i.values[0] === "iss") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`iss`)
	.setDescription("```\n" + `/iss` + "\n```")
    .addField("Info" , `ISS（国際宇宙ステーション）の現在位置を取得する。`, true)
   .addField("Usage" , "```\n" + `/iss` + "\n```", true)
   .addField("Command" , "</iss:998920719197012064>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "mcskin") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`mcskin`)
	.setDescription("```\n" + `/mcskin text: TEXT` + "\n```")
    .addField("Info" , `マインクラフトのスキンの画像を取得する。`, true)
   .addField("Usage" , "```\n" + `/mcskin text: Bob` + "\n```", true)
   .addField("Command" , "</mcskin:998920719381581919>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

              if (i.values[0] === "numbers") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`numbers`)
	.setDescription("```\n" + `/numbers` + "\n```")
    .addField("Info" , `数字に関する豆知識を取得する。`, true)
   .addField("Usage" , "```\n" + `/numbers` + "\n```", true)
   .addField("Command" , "</numbers:1002366500272877728>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "pagescreenshot") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`pagescreenshot`)
	.setDescription("```\n" + `/pagescreenshot url: URL` + "\n```")
    .addField("Info" , `URLのスクショ画像を取得する。`, true)
   .addField("Usage" , "```\n" + `/pagescreenshot url: https://example.com` + "\n```", true)
   .addField("Command" , "</pagescreenshot:998920719381581920>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

        if (i.values[0] === "qrcode") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`qrcode`)
	.setDescription("```\n" + `/qrcode url: URL` + "\n```")
    .addField("Info" , `URLをQRにする。`, true)
   .addField("Usage" , "```\n" + `/qrcode url: https://example.com` + "\n```", true)
   .addField("Command" , "</qrcode:998920719381581921>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
   else if (i.values[0] === "urlshorten") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`urlshorten`)
	.setDescription("```\n" + `/urlshorten url: URL app: [options]` + "\n```")
    .addField("Info" , `URLをショートURLにする。`, true)
   .addField("Usage" , "```\n" + `/urlshorten url: https://example.com app: is.gd` + "\n```", true)
   .addField("Command" , "</urlshorten:1014047229511737446>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

      else if (i.values[0] === "translate") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`translate`)
	.setDescription("```\n" + `/translate from: [options] to: [options] text: TEXT` + "\n```")
    .addField("Info" , `翻訳する。`, true)
   .addField("Usage" , "```\n" + `/translate from: 言語を検出する　to:日本語 text: Hello, I'm Bob.` + "\n```", true)
   .addField("Command" , "</translate:1001310088860029018>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
            else if (i.values[0] === "calculator") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`calculator`)
	.setDescription("```\n" + `/calculator` + "\n```")
    .addField("Info" , `電卓を使う。(button mode)`, true)
   .addField("Usage" , "```\n" + `/calculator` + "\n```", true)
   .addField("Command" , "</calculator:1009703177739841556>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
    }
        })