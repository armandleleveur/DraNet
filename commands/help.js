const Discord = require("discord.js");

exports.run = async(client, message, args) => {
    let help = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`:robot: Voici mes catégories d'aide !`)
    .setDescription(`Voici mes commandes disponible :`)
    .setThumbnail(message.author.avatarURL)
    .addField(":tools: Modération", "Fais `/moderation` pour voir mes commandes de modération !")
    .addField(":video_game: Jeux", "Fais `/jeux` pour voir mes commandes des jeux !")
    .addField(":tada: Fun", "Fais `/fun` pour voir mes commandes d'animation !")
    .addField(":musical_note: Musique", "Fais `/music` pour voir mes commandes musiques")
    .addField(":busts_in_silhouette: Invite", "Fais `/invite` pour avoir une invite")
    .setFooter("Menu d'aide @Drakaria Network")
    .setTimestamp()
    message.channel.send(help);
}