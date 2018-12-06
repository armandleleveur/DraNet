const Discord = require('discord.js');

exports.run = (client, message, args, ops) => {
    let msg = new Date();
    
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Erreur')
    .setDescription('Désolé, vous n\'avez pas les permmisions d\'administrateur')
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);

    if (message.author.id !== ops.ownerID) return message.channel.send(embed);

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
        let embed1 = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Erreur')
        .setDescription(`Impossible de recharger : ${args[0]}`)
        .setTimestamp(new Date())
        .setFooter(`Demandé par ${message.author.tag}`);
        
        return message.channel.send(embed1);
    }
    let embed2 = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Indo')
        .setDescription(`Rechargé avec succès : ${args[0]}`)
        .setTimestamp(new Date())
        .setFooter(`Demandé par ${message.author.tag}`);

    message.channel.send(embed2);
}