const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let msg = new Date();
    let help = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Invite Pour Drakaria Network`)
    .setDescription(`https://discord.gg/ADnw9D7`)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp(new Date())
    .setFooter(`Demandé par ${message.author.tag}`);
    message.channel.send(help);
}