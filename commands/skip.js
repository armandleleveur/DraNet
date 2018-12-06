exports.run = async (client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('Il n\'y a actuellement pas de musique dans cette guilde');

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Désolé, vous n\'êtes actuellement pas sur le même canal que le bot!');

    let userCount = message.member.voiceChannel.members.size;

    let required = Math.ceil(userCount/2);

    if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];

    if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Désolé, vous avez déjà voté pour sauter! ${fetched.queue[0].voteSkips.length}/${required} Champs obligatoires.`);

    fetched.queue[0].voteSkips.push(message.member.id);

    ops.active.set(message.guild.id, fetched);

    if (fetched.queue[0].voteSkips.length >= required) {

        message.channel.send('Chanson sautée avec succès !');

        return fetched.dispatcher.emit('finish');

    }

    message.channel.send(`A voté avec succès pour sauter ! ${fetched.queue[0].voteSkips.length}/${required} Champs obligatoires.`);
}