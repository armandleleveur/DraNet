const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const reason = args.slice(1).join(' ');
    client.unbanReason = reason;
    client.unbanAuth = message.author;
    const user = args[0];
   // const modlog = client.channels.find('name', 'mod-log');

    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("Impossible de trouver le canal des incidents.");

    //incidentchannel.send(banEmbed);

    //if (!modlog) return message.reply('Je ne trouve pas de canal mod-log');
    if (reason.length < 1) return message.reply('Vous devez fournir une raison pour l\'unban.');
    if (!user) return message.reply('Vous devez fournir un utilisateur pouvant être résolu, tel qu\'un ID utilisateur.').catch(console.error);
    message.guild.unban(user);
    message.reply(`Unban avec succès ${user}`);

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~UnBan~")
    .setColor("RANDOM")
    .addField("Utilisateur Unban", `${user}`)
    .addField("UnBan par", `<@${message.author.id}> avec ID ${message.author.id}`)
    .addField("Temps", message.createdAt)
    .addField("Raison", reason)
    .setFooter("Commande Unban @Drakaria Network")
    .setTimestamp();

    incidentchannel.send(banEmbed);
}