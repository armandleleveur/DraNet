const Discord = require("discord.js");
const an = '448880510995922944';
const test = '520300092100444190';
module.exports.run = async (client, message, args) => {
        let channel = message.guild.channels.find(`name`, "accueil");
        let a = new Discord.RichEmbed()
        .setTitle('Nouvel An : **Mardi 1 Janvier**\n')
        .setDescription("L'année **2018** est __définitivement__ derrière nous. Maintenant, place à 365 jours de santé, de bonheur et de joies intenses. \n\nBonne année de la part de Drakaria Network et son Staff 🤣\n")
        .setThumbnail('https://i.imgur.com/gLX824q.png')
        .setColor("RAMDOM")
        .setFooter("Nouvel An @Drakaria Network")
        .setTimestamp();
        channel.send('@everyone');
        channel.send(a);
}
