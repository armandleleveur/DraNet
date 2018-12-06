const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
     // les noms de jours / mois
     var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
     var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
     // on recupere la date
     var date = new Date();
     // on construit le message
     var messag = jours[date.getDay()] + " ";   // nom du jour
     messag += date.getDate() + " ";   // numero du jour
     messag += mois[date.getMonth()] + " ";   // mois
     messag += date.getFullYear();
     //console.log(messag);

     var date1 = new Date();
     // on construit le message
     var messag1 = [];//date.getDay()];   // nom du jour
     messag1 += date1.getDate();
     let js = '25' - messag1;

     //console.log(js);

    let embed = new Discord.RichEmbed()
    .setTitle('Jour Avant Noël')
    .setThumbnail('https://i.imgur.com/gLX824q.png')
    .setColor("#5E01FE")
    .addField("Jour :", messag)
    .addField("Nombre De Jour Avant Noël", js)
    .addField("Jour De Noël :", "Noël sera le **Mardi 25 Décembre**")
    .setFooter("Noël @Drakaria Network");

    message.channel.send(embed);
}