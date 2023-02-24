const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageSelectMenu } = require('discord.js');
const fs = require("fs") // Import FS to read event files

client.on("interactionCreate", async (i, client) => {

    if (i.customId === "funCmd") {
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
            .setCustomId("funCmd")
            .setPlaceholder('Command Usage')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
              {
                label: "/117",
                description: "現在時刻を送信する。",
                value: "117",
              },
              {
                label: "/8ball",
                description: "あなたの質問に答える。",
                value: "8ball",
              },
              {
                label: "/aki",
                description: "あなたが思い浮かべている人をあてます()",
                value: "aki",
              },
              {
                label: "/ascii",
                description: "文字をアスキーアートにする。",
                value: "ascii",
              },
              {
                label: "/bump",
                description: "Bump(偽)をします。",
                value: "bump",
              },
              {
                label: "/chuck",
                description: "楽しいコマンド。",
                value: "chuck",
              },
              {
                label: "/count",
                description: "カウントパネルを作成する。",
                value: "count",
              },
              {
                label: "/dissoku",
                description: "Dissoku UP(偽)をします。",
                value: "dissoku",
              },
              {
                label: "/funnybutton",
                description: "見たら押すボタン",
                value: "funnybutton",
              },
              {
                label: "/game",
                description: "ボットとゲームをする。",
                value: "game",
              },
              {
                label: "/inmu",
                description: "ランダムに淫夢語録を送信する",
                value: "inmu",
              },
              {
                label: "/kaomoji",
                description: "ランダムな顔文字を送信する。",
                value: "kaomoji",
              },
              {
                label: "/laughmoji",
                description: "ランダムな(笑)顔文字を送信する。",
                value: "laughmoji",
              },
              {
                label: "/lenny",
                description: "LennyFaceの顔文字を送信する。",
                value: "lenny",
              },
              {
                label: "/oicyammy",
                description: "美味しいヤミー❗️✨🤟😁👍✨⚡️感謝❗️🙌✨感謝❗️🙌✨",
                value: "oicyammy",
              },
              {
                label: "/ojisan",
                description: "おじさん構文を生成する。",
                value: "ojisan",
              },
              {
                label: "/randomyoutube",
                description: "ランダムにYouTubeのURLを送信する。",
                value: "randomyoutube",
              },
              {
                label: "/splitedeshow",
                description: "Super Idol的笑容 都没你的甜",
                value: "splitedeshow",
              },
              {
                label: "/tictactoe",
                description: "○×ゲームをする。",
                value: "tictactoe",
              },
              {
                label: "/tl",
                description: "話題を提供する。",
                value: "tl",
              },
              {
                label: "/uselessweb",
                description: "役に立たないURLを送信する。",
                value: "uselessweb",
              },
              {
                label: "/xd",
                description: "暇つぶしに使ってください。",
                value: "xd",
              },
              {
                label: "/yesno",
                description: "Yes or No",
                value: "yesno",
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

        if (i.values[0] === "117") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`117`)
	.setDescription("```\n" + `/117` + "\n```")
    .addField("Info" , `現在時刻を送信する。`, true)
   .addField("Usage" , "```\n" + `/117` + "\n```", true)
   .addField("Command" , "</117:1003232760246308874>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
        .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })
          
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

              if (i.values[0] === "aki") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`aki`)
	.setDescription("```\n" + `/aki` + "\n```")
    .addField("Info" , `あなたが思い浮かべている人をあてます()`, true)
   .addField("Usage" , "```\n" + `/aki` + "\n```", true)
   .addField("Command" , "</aki:1076771798030499860>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
        .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })
          
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
        if (i.values[0] === "8ball") {
          await i.deferUpdate()
   
         const joinEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`8ball`)
.setDescription("```\n" + `/8ball` + "\n```")
 .addField("Info" , `あなたの質問に答える。`, true)
.addField("Usage" , "```\n" + `/8ball` + "\n```", true)
.addField("Command" , "</8ball:1013719510722809927>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
     .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })
       
 
   await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
     }
   
        if (i.values[0] === "ascii") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`ascii`)
	.setDescription("```\n" + `/asciitext: TEXT` + "\n```")
    .addField("Info" , `文字をアスキーアートにする。`, true)
   .addField("Usage" , "```\n" + `/ascii text: en` + "\n```", true)
   .addField("Command" , "</ascii:1001367932976238674>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "bump") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`bump`)
	.setDescription("```\n" + `/bump` + "\n```")
    .addField("Info" , `Bump（偽）をします。`, true)
   .addField("Usage" , "```\n" + `/bump` + "\n```", true)
   .addField("Command" , "</bump:1004650235622072370>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

      if (i.values[0] === "tictactoe") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`tictactoe`)
	.setDescription("```\n" + `/tictactoe` + "\n```")
    .addField("Info" , `〇×ゲームをします。`, true)
   .addField("Usage" , "```\n" + `/tictactoe opponent: @User` + "\n```", true)
   .addField("Command" , "</tictactoe:1076786186162544702>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
        if (i.values[0] === "dissoku") {
          await i.deferUpdate()
   
         const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`dissoku`)
.setDescription("```\n" + `/dissoku up` + "\n```")
 .addField("Info" , `Dissoku Up（偽）をします。`, true)
.addField("Usage" , "```\n" + `/dissoku up` + "\n```", true)
.addField("Command" , "</dissoku up:1021721703862247434>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
    
           
   await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
     }

        if (i.values[0] === "chuck") {
          await i.deferUpdate()
   
         const joinEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`chuck`)
.setDescription("```\n" + `/chuck TYPE` + "\n```")
 .addField("Info" , `楽しいコマンド。`, true)
 .addField("Options" , "```\n" + `advice, antijoke, bujoku, chat, chucknorris, compliment, dare, joke, name, omosiroi, pun, quotes, roast, showerthought, trivia, truth ` + "\n```", true)
.addField("Usage" , "```\n" + `/chuck joke ` + "\n```", true)
.addField("Command" , "</chuck:1014432429592817754>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
   await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
     }
   
              if (i.values[0] === "game") {
          await i.deferUpdate()
   
         const joinEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`game`)
.setDescription("```\n" + `/game TYPE` + "\n```")
 .addField("Info" , `ボットとゲームをする。`, true)
.addField("Options" , "```\n" + `janken ` + "\n```", true)
.addField("Usage" , "```\n" + `/game janken` + "\n```", true)
.addField("Command" , "</game:1013719510722809927>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
     .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })
       
 
   await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
     }
      
        if (i.values[0] === "inmu") {
          await i.deferUpdate()
   
         const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`inmu`)
.setDescription("```\n" + `/inmu` + "\n```")
 .addField("Info" , `ランダムに淫夢語録を送信する。`, true)
.addField("Usage" , "```\n" + `/inmu` + "\n```", true)
.addField("Command" , "</inmu:1014087354811699220>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
        
   await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
     }

     if (i.values[0] === "lenny") {
      await i.deferUpdate()

     const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`lenny`)
.setDescription("```\n" + `/lenny` + "\n```")
.addField("Info" , `LennyFace の顔文字を送信する。`, true)
.addField("Usage" , "```\n" + `/lenny` + "\n```", true)
.addField("Command" , "</lenny:1014100051741646871>", true)
.addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
    
await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
 }


        if (i.values[0] === "kaomoji") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`kaomoji`)
	.setDescription("```\n" + `/kaomoji` + "\n```")
    .addField("Info" , `ランダムな顔文字を送信する。`, true)
   .addField("Usage" , "```\n" + `/kaomoji` + "\n```", true)
   .addField("Command" , "</kaomoji:998920719197012065>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "laughmoji") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`laughmoji`)
	.setDescription("```\n" + `/laughmoji` + "\n```")
    .addField("Info" , `ランダムな(笑)文字を送信する。`, true)
   .addField("Usage" , "```\n" + `/laughmoji` + "\n```", true)
   .addField("Command" , "</laughmoji:998920719197012066>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
        if (i.values[0] === "oicyammy") {
          await i.deferUpdate()
   
         const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`oicyammy`)
.setDescription("```\n" + `/oicyammy` + "\n```")
 .addField("Info" , `ランダムに淫夢語録を送信する。`, true)
.addField("Usage" , "```\n" + `/oicyammy` + "\n```", true)
.addField("Command" , "</oicyammy:1076786185969598512>", true)
  .addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
        
   await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
     }
        if (i.values[0] === "randomyoutube") {
          await i.deferUpdate()
    
         const leaveEmbed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle(`randomyoutube`)
    .setDescription("```\n" + `/randomyoutube` + "\n```")
    .addField("Info" , `ランダムにYouTubeのURLを送信する。`, true)
    .addField("Usage" , "```\n" + `/randomyoutube` + "\n```", true)
    .addField("Command" , "</randomyoutube:1014101690703675523>", true)
    .addField("Permissions" , `User:  無し\nBot: 無し`, true)
    .setTimestamp()
    .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
    .setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
        
    await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
     }
     if (i.values[0] === "splitedeshow") {
          await i.deferUpdate()
    
         const leaveEmbed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle(`splitedeshow`)
    .setDescription("```\n" + `/splitedeshow` + "\n```")
    .addField("Info" , `Super Idol的笑容 都没你的甜。`, true)
    .addField("Usage" , "```\n" + `/splitedeshow` + "\n```", true)
    .addField("Command" , "</splitedeshow:1076797504219250768>", true)
    .addField("Permissions" , `User:  無し\nBot: 無し`, true)
    .setTimestamp()
    .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
    .setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
        
    await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
     }
     if (i.values[0] === "uselessweb") {
      await i.deferUpdate()

     const leaveEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`uselessweb`)
.setDescription("```\n" + `/uselessweb` + "\n```")
.addField("Info" , `役に立たないURLを送信する。`, true)
.addField("Usage" , "```\n" + `/uselessweb` + "\n```", true)
.addField("Command" , "</uselessweb:1014096417423368232>", true)
.addField("Permissions" , `User:  無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
    
await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
 }

         if (i.values[0] === "tl") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`tl`)
	.setDescription("```\n" + `/tl` + "\n```")
    .addField("Info" , `見たら押すボタンを作成する。`, true)
   .addField("Usage" , "```\n" + `/tl` + "\n```", true)
  .addField("Command" , "</tl:1076786186162544704>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
        if (i.values[0] === "xd") {
             await i.deferUpdate()
      
            const joinEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`popmeter`)
	.setDescription("```\n" + `/xd TYPE` + "\n```")
    .addField("Info" , `暇つぶしに使ってください。`, true)
    .addField("Options" , "```\n" + `bodyprice, disires, disliker, facerank, girlrate, headscrew, height-weight, howgay, howdispop, howliar, howmarry, howpervert, howpop, howsimp, iq, liker, peenis` + "\n```", true)
   .addField("Usage" , "```\n" + `/xd` + "\n```", true)
   .addField("Command" , "</xd:1008645301407580160>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
    
      await msg.edit({ embeds: [joinEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
     if (i.values[0] === "yesno") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`yesno`)
	.setDescription("```\n" + `/yesno` + "\n```")
    .addField("Info" , `Yes、Noのどちらかの画像をランダムに送信する。\n超低確率でMaybeが返ってくることもあるかもしれない。`, true)
   .addField("Usage" , "```\n" + `/yesno` + "\n```", true)
   .addField("Command" , "</yesno:1002920187848298507>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

     if (i.values[0] === "ojisan") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`ojisan`)
	.setDescription("```\n" + `/ojisan 任意| name: NAME emoji: AMOUNT[0~9]` + "\n```")
    .addField("Info" , `おじさん構文を作成する。`, true)
   .addField("Usage" , "```\n" + `/ojisan name: Bob emoji:9` + "\n```", true)
   .addField("Command" , "</ojisan:1008185319486652426>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

     if (i.values[0] === "count") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`count`)
	.setDescription("```\n" + `/count` + "\n```")
    .addField("Info" , `カウントパネルを作成する。`, true)
   .addField("Usage" , "```\n" + `/count` + "\n```", true)
   .addField("Command" , "</count:1009080726467117146>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

     if (i.values[0] === "funnybutton") {
             await i.deferUpdate()
      
            const leaveEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`funnybutton`)
	.setDescription("```\n" + `/funnybutton type: [options]` + "\n```")
    .addField("Info" , `見たら押すボタンを作成する。`, true)
   .addField("Usage" , "```\n" + `/funnybutton type: 押したら絵描くボタン` + "\n```", true)
   .addField("Note" , "```\n" + `ボタンクールダウン:10s\n一度に押せる回数は5回です。` + "\n```", true)
   .addField("Command" , "</funnybutton:1008982833957703720>", true)
     .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
              
      await msg.edit({ embeds: [leaveEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
}
})
        