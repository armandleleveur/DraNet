const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
    let msg = new Date();
    
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Erreur')
    .setDescription('Veuillez vous connecter à un canal vocal.')
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    let embed1 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Erreur')
    .setDescription('Désolé, le bot n\'est pas connecter dans un channel !')
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    let embed2 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Erreur')
    .setDescription('Désolé, vous n\'êtes pas connecté au même canal !')
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    let embed3 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Info')
    .setDescription('Le Bot est en train de se déconnecter du channel !')
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    if (!message.member.voiceChannel) return message.channel.send(embed);

    if (!message.guild.me.voiceChannel) return message.channel.send(embed1);

    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send(embed2);

    message.guild.me.voiceChannel.leave();

    message.channel.send(embed3);

}