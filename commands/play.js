const ytdl = require('ytdl-core');
const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    let msg = new Date();
    
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Erreur')
    .setDescription('Connectez-vous dans un salon vocal, si posible le salon Musique')
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    let embed1 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Erreur')
    .setDescription('Désolé, veuillez saisir une URL ou un nom à rechercher à la suite de la commande.')
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    let embed2 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Erreur')
    .setDescription('Désolé, veuillez saisir une URL **valide** après la commande.')
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    if (!message.member.voiceChannel) return message.channel.send(embed);

    if (!args[0]) return message.channel.send(embed1);

    let validate = await ytdl.validateURL(args[0]);

    if (!validate) {
        let commandFile = require(`./search.js`);
        return commandFile.run(client, message, args, ops);
    }

    if (!validate) return message.channel.send(embed2);

    let info = await ytdl.getInfo(args[0]);

    let data = ops.active.get(message.guild.id) || {};

    if (!data.connection) data.connection = await message.member.voiceChannel.join();
    if (!data.queue) data.queue = [];
    data.guildID = message.guild.id;

    data.queue.push({
        songTitle: info.title,
        requester: message.author.tag,
        url: args[0],
        annouceChannel: message.channel.id
    });

    let embed3 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Info')
    .setDescription(`Ajouté à la file d'attente : ${info.title} | Demandé par : ${message.author.tag}`)
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    if (!data.dispatcher) play(client, ops, data);
    else {
        message.channel.send(embed3);
    }

    ops.active.set(message.guild.id, data);

}

async function play(client, ops, data) {

    client.channels.get(data.queue[0].annouceChannel).send(`Lecture en cours : ${data.queue[0].songTitle} | Demandé par : ${data.queue[0].requester}`);

    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly' }));
    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('finish', function() {

        finish(client. ops, this);


    });

}

function finish(client, ops, dispatcher) {

    let fetched = ops.active.get(dispatcher.guildID);

    fetched.queue.shift();

    if (fetched.queur.length > 0) {

        ops.active.set(dispatcher.guildID, fetched);

        play(client, ops, fetched);
    } else {

        ops.active.delete(dispatcher.guildID);

        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
        if (vc) vc.leave();


    }
}