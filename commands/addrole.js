const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("❌ Désolé, tu ne peux pas faire ça.");
  if(args[0] == "help"){
    message.reply("Usage: !addrole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Impossible de trouver cet utilisateur !");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Spécifiez un rôle !");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Impossible de trouver ce rôle.");

  if(rMember.roles.has(gRole.id)) return message.reply("❌ Ils ont déjà ce rôle.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Félicitations, vous avez reçu le rôle ${gRole.name}`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`Félicitations à <@${rMember.id}>, ils ont reçu le rôle ${gRole.name}. Nous avons essayé de les DM, mais leurs DM sont verrouillés.`)
  }
}
