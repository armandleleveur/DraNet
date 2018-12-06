const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {


    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("Ne peut faire.");
    if (args[0] == "help") {
        message.reply("Usage: !tempmute <user> <1s/m/h/d>");
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Veuillez mentionner un utilisateur !");
    if (tomute.hasPermission("MUTE_MEMBERS")) return message.reply("Je ne peux pas le mute !");
    let reason = args.slice(2).join(" ");
    if (!reason) return message.reply("Merci d'indiquer une raison !");

    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    //end of create role
    let mutetime = args[1];
    if (!mutetime) return message.reply("Merci de précisez un temps");

    message.delete().catch(O_o => {});

    try {
        await tomute.send(`Salut ! t'as été muter pour ${mutetime}. Désolé !`)
    } catch (e) {
        message.channel.send(`Un utilisateur a été mute, mais ses MP soont bloqués, il a été mute pour ${mutetime}`)
    }

    let muteembed = new Discord.RichEmbed()
        .setDescription(`Mute fait par ${message.author}`)
        .setColor("RANDOM")
        .addField("Utilisateur muted :", tomute)
        .addField("Muted dans le salon", message.channel)
        .addField("Muted à", message.createdAt)
        .addField("Temps du mute", mutetime)
        .addField("Raison", reason);

    let incidentschannel = message.guild.channels.find(`name`, "mod-log");
    if (!incidentschannel) return message.reply("Créer un salon logs !");
    incidentschannel.send(muteembed);
    message.channel.send(`<@${tomute.id}> est mute pour ${mutetime}`)
    await (tomute.addRole(muterole.id));

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> a été unmuted !`);
    }, ms(mutetime));
}