const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    let music = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`:robot: Voici mes catégories de musique !`)
    .setDescription(`Voici mes commandes disponible :`)
    .setThumbnail(message.author.avatarURL)
    .addField(":headphones: play <URL Youtube> ou play <search>", "Pour lire une musique !")
    .addField(":eject: leave", "Pour déconnecter le bot")
    .addField(":musical_note: queue", "Pour voir les musique dans la file d'attente")
    .addField(":track_next: skip", "Pour passer une musique")
    .addField(":pause_button: pause", "Mettre en pause la musique")
    .addField(":arrow_forward: resume", "Reprendre la musique")
    .addField(":mag_right: search <nom>", "Recherhe la musique")
    .addField(":loud_sound: volume <0-200>", "Changer le volume de la musique")
    .setFooter("Menu Music @Drakaria Network")
    .setTimestamp()
    message.channel.send(music);
}

//ajout de command music non fait le 15/112018 à 23:12