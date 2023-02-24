const client = require('../../index.js')
const Discord = require("discord.js")
const config = require("../../config.js");
const functions = require("../../functions.js");
const { MessageActionRow, Modal, TextInputComponent, MessageEmbed, Permissions, MessageSelectMenu } = require('discord.js');
const fs = require("fs") // Import FS to read event files

client.on("interactionCreate", async (i, client) => {

    if (i.customId === "imgenCmd") {
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
        .setCustomId("imgenCmd")
        .setPlaceholder('Command Usage')
        .setMinValues(1)
        .setMaxValues(1)
        .addOptions([
          {
            label: "/5000cho",
            description: "50000兆円ジェネレーターを生成する。",
            value: "5000cho",
          },
          {
            label: "/fakecomment",
            description: "指定したユーザーのフェイクコメントを作成する。",
            value: "fakecomment",
          },
          {
            label: "/img-filter",
            description: "画像にフィルターをかける。",
            value: "img-filter",
          },
          {
            label: "/img-mod",
            description: "アイコンを操作する。",
            value: "img-mod",
          },
          {
            label: "/makememe",
            description: "ミーム画像を作成する。",
            value: "makememe",
          },
          {
            label: "/meme",
            description: "ミーム画像を送信する。",
            value: "meme",
          },
          {
            label: "/text2image",
            description: "テキストを画像にする。",
            value: "text2image",
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

        if (i.values[0] === "5000cho") {
            await i.deferUpdate()
          
            const addroleEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`5000cho`)
	.setDescription("```\n" + `/5000cho top: TEXT 任意| bottom: TEXT background: True/False rainbow: True/False` + "\n```")
    .addField("Info" , `5000兆円ジェネレーターを生成する。`, true)
   .addField("Usage" , "```\n" + `/5000cho top: 5000兆円 bottom: 欲しい！\n/5000cho top: 5000兆円 bottom: 欲しい！ rainbow: True` + "\n```", true)  
   .addField("Command" , "</5000cho:1004259518282223677>", true)
   .addField("Permissions" , `User:  無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
          
    
      await msg.edit({ embeds: [addroleEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
    else if (i.values[0] === "fakecomment") {
            await i.deferUpdate()
          
            const cbEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`fakecomment`)
	.setDescription("```\n" + `/fakecomment type: TYPE user:@User text: TEXT` + "\n```")
    .addField("Info" , `指定したユーザーのフェイクコメントを生成する。`, true)
   .addField("Usage" , "```\n" + `/fakecomment type: YouTube user:@Bob text:Hello` + "\n```", true)
   .addField("Command" , "</fakecomment:1000954238760927253>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
      await msg.edit({ embeds: [cbEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

          else if (i.values[0] === "img-filter") {
            await i.deferUpdate()
          
            const clearEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`img-filter`)
	.setDescription("```\n" + `/img-filter TYPE 任意│ user: @User attachment: 添付画像` + "\n```")
    .addField("Info" , `画像にフィルターをかける。`, true)
    .addField("Options" , "```\n" + `blur, bright, burn, colorfy, dark, glass, greyscale, invert, invertgreyscale, pixelate, rainbow, sepia, sharpen, threshold` + "\n```", true)
   .addField("Usage" , "```\n" + `/img-filter blur @Bob\n/img-filter greyscale \n※何も指定がない場合は自分のアイコンになります。` + "\n```", true)  
   .addField("Command" , "</img-filter:1006473278505885706>", true)
    .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
    
      await msg.edit({ embeds: [clearEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

                else if (i.values[0] === "img-mod") {
            await i.deferUpdate()
          
            const ccEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`img-mod`)
	.setDescription("```\n" + `/img-mod TYPE user: @User (text: TEXT ...)` + "\n```")
    .addField("Info" , `アイコンを操作する。`, true)
   .addField("Options" , "```\n" + `affect, beautiful, bed, changemymind, clyde, delete, distracted, facepalm, fusion, gradient, hitler, jail, jokeoverhead, kiss, ohno, opinion, rip, shit, slap, spank, trash, trigger, wanted, wasted, ` + "\n```", true)
   .addField("Usage" , "```\n" + `/img-mod` + "\n```", true)
   .addField("Command" , "</img-mod:1013724635021455420>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
    
      await msg.edit({ embeds: [ccEmbed] , components: [helpMenu, cmdinfo, helps] });
        }

                else if (i.values[0] === "makememe") {
            await i.deferUpdate()
          
            const ccEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`makememe`)
	.setDescription("```\n" + `/makememe type: [options] text: TEXT` + "\n```")
    .addField("Info" , `ミーム画像を作成する。`, true)
   .addField("Usage" , "```\n" + `/makememe type: Drunk text: AAA` + "\n```", true)
   .addField("Command" , "</makememe:1013724635021455421>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
    
      await msg.edit({ embeds: [ccEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
        else if (i.values[0] === "meme") {
          await i.deferUpdate()
        
          const ccEmbed = new Discord.MessageEmbed()
.setColor(config.color)
.setTitle(`meme`)
.setDescription("```\n" + `/meme type: [options]` + "\n```")
  .addField("Info" , `ミーム画像を送信する。`, true)
 .addField("Usage" , "```\n" + `/meme type: owo` + "\n```", true)
 .addField("Command" , "</meme:1013711896928604241>", true)
   .addField("Permissions" , `User: 無し\nBot: 無し`, true)
.setTimestamp()
.setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
  
    await msg.edit({ embeds: [ccEmbed] , components: [helpMenu, cmdinfo, helps] });
      }

                else if (i.values[0] === "text2image") {
            await i.deferUpdate()
          
            const ccEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle(`text2image`)
	.setDescription("```\n" + `/text2image type: [options] font: [options] background: [options] text: TEXT` + "\n```")
    .addField("Info" , `テキストを画像にする。`, true)
   .addField("Usage" , "```\n" + `/text2image type: Glow font: デフォルト background: 背景透過 text: Hello` + "\n```", true)
   .addField("Command" , "</text2image:1006473278505885708>", true)
     .addField("Permissions" , `User: 無し\nBot: 無し`, true)
	.setTimestamp()
 .setAuthor({ name: msg.embeds[0].author.name || "", iconURL: msg.embeds[0].author.iconURL, url: '' })
	.setFooter({ text: msg.embeds[0].footer.text || "", iconURL: '' })  
       
          
    
      await msg.edit({ embeds: [ccEmbed] , components: [helpMenu, cmdinfo, helps] });
        }
      
    }
        })