const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

const tokenfile = require("./token.json");

const prefix = "/"
const ownerID = '269787936936034304';
const active = new Map();

const serverStats = {
    guildID: '329618429915037696',
    totalUsersID: '512332759641882634',
    memberCountID: '512332868018765824',
    botCountID: '512332936083931157'
};

const avent = '519977150275780628';
const an = '448880510995922944';
const test = '520300092100444190';

let users = ['193096742541983744', '370971054820294667', '310902553900613632', '339026256018276352', '336064220929982465', '387990810135625738', '323434007486529539', '256863078635798528', '270213398975741953', '436145133562494987', '471349043386384395', '296614465095335936', '485021450965876736', '349585599717572629', '294892876943327242', '375337305646563329', '252378066674909186', '241619296021643264', '449967988507017216', '276079343166291968', '442046747921874944', '190068244390871041', '211402352236691456', '300557643590664192', '319181599906463755', '452171651006595076', '285399967705726978', '280365596980281345', '381152088782012418'];

let statuses = ['discord.gg/ADnw9D7', 'Bonjour le monde !', 'Serveur Minecraft', 'Survivre ...', 'Drakaria Network', 'Nouvelle mise à jour !', 'Minecraft'];

let cal = ['Un Grade Joueur+', 'Un Grade Suzerain', 'Un Accès au bêta du serveur', 'Un Accès au béta du launcheur', 'Accès prioritère au serveur Minecraft', 'Des Nouveaux Emoji', 'Channel Réservé Vocal (3 joueur)', 'Channel Réservé Vocal (2 joueur)', 'Channel Réservé Vocal (4 joueur)', 'Channel Réservé Vocal (joueur illimité)', 'Emoji Externe'];

/*client.on('ready', () => {
    setInterval(function() {
    
        let status = statuses[Math.floor(Math.random()*statuses.length)];

        client.user.setPresence({ game: { name: status }, status: 'online' });

        client.user.setPresence({ activity: { name: status }, status: 'online' });



    }, 10000)

});*/

client.on('message', async message => {

    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    try {

        delete require.cache[require.resolve(`./commands/${cmd}.js`)];

        let ops = {
            ownerID: ownerID,
            active: active
        }

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, ops);
    } catch (e) {
        console.log(e.stack);
    }
});

client.on('ready', () => {
    console.log('Lancer !');
    client.user.setStatus('Online');
    client.user.setGame('Drakaria Network', 'https://drakaria-network.000webhostapp.com/');
    

});

/*client.on('ready', () => {
    setInterval(function() {
        //for (user of client.users){
            //console.log(user[1].id);
          //}
        
        
        let u = users[Math.floor(Math.random()*users.length)];
        console.log(u);
        let cal1 = cal[Math.floor(Math.random()*cal.length)];
        //let jour = new Date();

        var jours = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
        var mois = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre");
        // on recupere la date
        var date = new Date();
        // on construit le message
         var messag = jours[date.getDay()] + " ";   // nom du jour
         messag += date.getDate() + " ";   // numero du jour
        messag += mois[date.getMonth()] + " ";   // mois
        messag += date.getFullYear();
        //console.log(jour);
        //client.channels.get(avent).send(`<@${u}>`);
        let j = new Discord.RichEmbed() 
        .setTitle('Calendrier de l\'avent')
        .setDescription("Plein de cadeaux à gagner pendant le mois décembre !!")
        .setThumbnail('https://i.imgur.com/gLX824q.png')
        .setColor("#5E01FE")
        .addField("Jour", `Ouverture de la case du jour : ${messag}`)
        .addField("Joueur", `<@${u}>`)
        .addField("Cadeau", `Bravo vous avez gagnez : **${cal1}**`)
        .addField('Problème', 'Pour Tout problème veuillez contacter MrEleveur !!')
        .setFooter("Calendrier de l'avent @Drakaria Network");
        //client.channels.get(avent).send(`Ouverture de la case du jour : ${jour}`);
        //client.channels.get(avent).send(`<@$u>, Bravo vous avez gagnez : ${cal1} \n\n Drakaria Network`);
        client.channels.get(avent).send(`<@${u}>`);
        client.channels.get(avent).send(j);



    }, 86400000); //86400000
});*/



client.on('guildMemberAdd', member => {

    if (member.guild.id !== serverStats.guildID) return;

    client.channels.get(serverStats.totalUsersID).setName(`👥 Total Users : ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
    client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);


});

client.on('guildMemberRemove', member => {

    if (member.guild.id !== serverStats.guildID) return;

    client.channels.get(serverStats.totalUsersID).setName(`👥 Total Users : ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
    client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);

});

client.login(tokenfile.token);
