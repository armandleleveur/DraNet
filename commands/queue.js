const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    let msg = new Date();
    
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Erreur')
    .setDescription('Il n\'y a actuellement pas de musique dans ce serveur')
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send(embed);

    let queue = fetched.queue;
    let nowPlaying = queue[0];

    let embed1 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Info Lecture')
    .setDescription(`__**Lecture en cours**__\n**${nowPlaying.songTitle}**`)
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    //let resp = `__**Lecture en cours**__\n**${nowPlaying.songTitle}** -- **Demandé par :** *${nowPlaying.resquester}*\n\n__**Queue**__\n`;
    let resp = message.channel.send(embed1);


    for (var i = 1; i < queue.length; i++) {
        let embed2 = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Info Queue')
        .setDescription(`__**Queue**__\n${i}. **${queue[i].songTitle}**`)
        .setTimestamp(new Date())
        .setFooter(`Demandé par ${message.author.tag}`);

        resp += message.channel.send(embed2);
    }

    message.channel.send(resp);

}