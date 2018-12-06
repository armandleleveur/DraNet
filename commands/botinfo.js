const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Informations sur le bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nom du bot", bot.user.username)
    .addField("Créé en", bot.user.createdAt)
    .setFooter("Commande BotInfo @Drakaria Network")
    .setTimestamp();

    message.channel.send(botembed);
}