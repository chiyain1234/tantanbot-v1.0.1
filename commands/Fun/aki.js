const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');
const akinator = require("discord.js-akinator");
const cmdName = "aki"
const language = "ja"; // The Language of the Game
const childMode = false; // Whether to use Akinator's Child Mode
const gameType = "character"; // The Type of Akinator Game to Play. ("animal", "character" or "object")
const useButtons = true; // Whether to use Discord's Buttons
const embedColor = "#87cefa"; // The Color of the Message Embeds

module.exports = {
    guildOnly: false, // サーバー専用コマンドかどうか
    adminGuildOnly: false,
    data: new SlashCommandBuilder() // スラッシュコマンド登録のため
        .setName(cmdName)
        .setDescription("あなたが思い浮かべている人物を当てます()"),

	async execute(i, client) {
    
 akinator(i, {
            language: language, // Defaults to "en"
            childMode: childMode, // Defaults to "false"
            gameType: gameType, // Defaults to "character"
            useButtons: useButtons, // Defaults to "false"
            embedColor: embedColor // Defaults to "Random"
        });
}
}