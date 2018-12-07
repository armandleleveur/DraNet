const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Informations sur le bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nom du bot", client.user.username)
    .addField("Créé en", client.user.createdAt)
    .setFooter("Commande BotInfo @Drakaria Network")
    .setTimestamp();

    message.channel.send(botembed);
}
