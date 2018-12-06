const Discord = require("discord.js");

exports.run = async(client, message, args, ops) => {
    let help = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`:tools: Voici mes commandes amusantes !`)
    .setThumbnail(message.author.avatarURL)
    .addField("!botinfo", "Donne des informations sur le bot !")
    .addField("!serverinfo", "Donne des informations sur le serveur !")
    .addField("!report", "Report un joueur au Modérateur")
    .addField("!8ball <question ghfjftj>", "Pose une question au bot")
    .setFooter("Commande Fun @Drakaria Network")
    .setTimestamp()
    message.channel.send(help);
}