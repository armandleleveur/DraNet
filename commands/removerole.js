const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Je suis désolé, vous ne pouvez pas faire ça.");
  if(args[0] == "help"){
    message.reply("Usage : !removerole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Impossible de trouver cet utilisateur !");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Spécifiez un rôle !");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Impossible de trouver ce rôle.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Ils n'ont pas ce rôle.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Vous avez perdu le rôle : ${gRole.name}`)
  }catch(e){
    message.channel.send(`RIP à <@${rMember.id}>, ils ont perdu le rôle ${gRole.name}. Nous avons essayé de les DM, mais leurs DM sont verrouillés.`)
  }
}
