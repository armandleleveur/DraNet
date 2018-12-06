const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    let msg = new Date();
    
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Erreur')
    .setDescription('Il n\'y a actuellement pas de musique dans ce serveur')
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    let embed1 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Erreur')
    .setDescription('Désolé, vous n\'êtes pas sur le même canal que le bot musical !')
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    let embed2 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Erreur')
    .setDescription('Cette musique n\'est pas en pause !')
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send(embed);

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(embed1);

    if (!fetched.dispatcher.paused) return message.channel.send(embed2);

    fetched.dispatcher.resume();

    let embed3 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Info')
    .addField('Repris avec succès de ', fetched.queue[0].songTitle)
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    message.channel.send(embed3);

}