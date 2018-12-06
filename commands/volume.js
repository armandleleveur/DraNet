exports.run = async (client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('Il n\'y a actuellement pas de musique dans cette guilde');

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Désolé, vous n\'êtes pas sur le même canal que le bot musical.');

    if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('Veuillez saisir un nombre compris entre 0 et 200');

    fetched.dispatcher.setVolume(args[0]/100);

    message.channel.send(`Volume de ${fetched.queue[0].songTitle} mis a ${args[0]} %`);

}