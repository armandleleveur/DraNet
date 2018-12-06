const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Impossible de trouver l'utilisateur!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Non, je ne peux pas le faire");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Cette personne ne peut pas être ban!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Utilisateur banni", `${bUser} avec ID ${bUser.id}`)
    .addField("Banni par", `<@${message.author.id}> avec ID ${message.author.id}`)
    .addField("Interdit dans", message.channel)
    .addField("Temps", message.createdAt)
    .addField("Raison", bReason)
    .setFooter("Commande Ban @Drakaria Network")
    .setTimestamp();

    let incidentchannel = message.guild.channels.find(`name`, "ban");
    if(!incidentchannel) return message.channel.send("Impossible de trouver le canal des incidents.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}