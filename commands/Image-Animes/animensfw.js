const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require('discord.js');
const axios = require('axios')
const akaneko = require('akaneko');
const HMtai = require("hmtai");
const hmtai = new HMtai();
const randomPuppy = require('random-puppy');
const fs = require("fs")
const booru = require('booru');
const cmdName = "animensfw"

module.exports = {
    guildOnly: true, 
    adminGuildOnly: false, 
    nsfwOnly: true,
    data: new SlashCommandBuilder() 
        .setName(cmdName)
        .setDescription("NSFW画像が出るかもしれない2次元キャラの画像を取得する。")
            .addSubcommand(subcommand => 
          subcommand
              .setName("gotiusa")      
              .setDescription("ごちうさの画像を表示する。")    
    )
            .addSubcommand(subcommand => 
          subcommand
              .setName("miku")      
              .setDescription("初音ミクの画像を表示する。")    
    )
           .addSubcommand(subcommand => 
          subcommand
              .setName("rizero")      
              .setDescription("Re:Zeroの画像を表示する。")    
    )
           .addSubcommand(subcommand => 
          subcommand
              .setName("touhou")      
              .setDescription("東方の画像を表示する。")    
    )
        .addSubcommand(subcommand => 
          subcommand
              .setName("hololive")      
              .setDescription("ホロライブの画像を表示する。")    
    )
        .addSubcommand(subcommand => 
          subcommand
              .setName("genshin")      
              .setDescription("原神の画像を表示する。")    
    )
      
        .addSubcommand(subcommand => 
          subcommand
              .setName("umamusume")      
              .setDescription("ウマ娘の画像を表示する。")    
    )
          .addSubcommand(subcommand => 
          subcommand
              .setName("pokemon")      
              .setDescription("ポケモンの画像を表示する。")    
    )
    .addSubcommand(subcommand => 
      subcommand
          .setName("splatoon")      
          .setDescription("スプラトゥーンの画像を表示する。")    
)    
.addSubcommand(subcommand => 
    subcommand
        .setName("kankore")      
        .setDescription("スプラトゥーンの画像を表示する。")    
)
.addSubcommand(subcommand => 
    subcommand
        .setName("princess_connect")      
        .setDescription("プリコネの画像を表示する。")    
)
.addSubcommand(subcommand => 
  subcommand
      .setName("blue_archive")      
      .setDescription("ブルーアーカイブの画像を表示する。")    
)
      .addSubcommand(subcommand => 
          subcommand
              .setName("proseka")      
              .setDescription("プロセカの画像を表示する。")    
    ),

  
    async execute(i, client) {
      
  if (i.options.getSubcommand()=== 'gotiusa') {
        var word = "gochuumon_wa_usagi_desu_ka?"
    booru.search('db', [word], {
        nsfw: true,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`ごちうさ の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
          
        return i.reply({embeds: [Embed] })
        }
      })
  }
  else if (i.options.getSubcommand()=== 'kankore') {
    var word = "kantai_collection "
booru.search('db', [word], {
    nsfw: false,
    random: true
  })
  .then(async images => {
    for (let image of images) {
      var img = image.file_url
const Embed = new MessageEmbed()
.setColor(client.config.color)
.setTitle(`艦これ の画像`)
.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
.setImage(img)
.setTimestamp()
.setFooter({ text: i.toString() });

    return i.reply({embeds: [Embed] })
    }
  })
}
else if (i.options.getSubcommand()=== 'princess_connect') {
    var word = "princess_connect!"
booru.search('db', [word], {
    nsfw: false,
    random: true
  })
  .then(async images => {
    for (let image of images) {
      var img = image.file_url
const Embed = new MessageEmbed()
.setColor(client.config.color)
.setTitle(`プリコネ の画像`)
.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
.setImage(img)
.setTimestamp()
.setFooter({ text: i.toString() });

    return i.reply({embeds: [Embed] })
    }
  })
}

else if (i.options.getSubcommand()=== 'blue_archive') {
    var word = "blue_archive"
booru.search('db', [word], {
    nsfw: false,
    random: true
  })
  .then(async images => {
    for (let image of images) {
      var img = image.file_url
const Embed = new MessageEmbed()
.setColor(client.config.color)
.setTitle(`ブルーアーカイブ の画像`)
.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
.setImage(img)
.setTimestamp()
.setFooter({ text: i.toString() });

    return i.reply({embeds: [Embed] })
    }
  })
}

     else if (i.options.getSubcommand()=== 'miku') {
        var word = "hatsune_miku "
    booru.search('db', [word], {
        nsfw: true,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`初音ミク の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }    
   else if (i.options.getSubcommand()=== 'splatoon') {
    var word = "splatoon"
booru.search('db', [word], {
    nsfw: true,
    random: true
  })
  .then(async images => {
    for (let image of images) {
      var img = image.file_url
const Embed = new MessageEmbed()
.setColor(client.config.color)
.setTitle(`スプラトゥーン の画像`)
.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
.setImage(img)
.setTimestamp()
.setFooter({ text: i.toString() });

    return i.reply({embeds: [Embed] })
    }
  })
}
      else if (i.options.getSubcommand()=== 'rizero') {
        var word = "re:zero_kara_hajimeru_isekai_seikatsu "
    booru.search('db', [word], {
        nsfw: true,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`Re:Zero の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
     else if (i.options.getSubcommand()=== 'touhou') {
        var word = "touhou"
    booru.search('db', [word], {
        nsfw: true,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`東方 の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
     else if (i.options.getSubcommand()=== 'hololive') {
        var word = "hololive "
    booru.search('db', [word], {
        nsfw: true,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`ホロライブ の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
     else if (i.options.getSubcommand()=== 'genshin') {
        var word = "genshin_impact "
    booru.search('db', [word], {
        nsfw: true,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`原神 の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
            else if (i.options.getSubcommand()=== 'umamusume') {
        var word = "umamusume "
    booru.search('db', [word], {
        nsfw: true,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`ウマ娘 の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
   else if (i.options.getSubcommand()=== 'pokemon') {
        var word = "pokemon "
    booru.search('db', [word], {
        nsfw: true,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`ポケモン の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
   else if (i.options.getSubcommand()=== 'proseka') {
        var word = "project_sekai "
    booru.search('db', [word], {
        nsfw: true,
        random: true
      })
      .then(async images => {
        for (let image of images) {
          var img = image.file_url
  const Embed = new MessageEmbed()
	.setColor(client.config.color)
	.setTitle(`プロセカ の画像`)
	.setAuthor({ name: `${client.user.tag}`, iconURL: `${client.user.displayAvatarURL()}`, url: '' })
	.setImage(img)
	.setTimestamp()
	.setFooter({ text: i.toString() });
  
        return i.reply({embeds: [Embed] })
        }
      })
  }
    }
}