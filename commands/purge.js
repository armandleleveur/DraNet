exports.run = (client, message, args) => {
    if (isNaN(args[0])) return message.channel.send('**Veuillez fournir un nombre valide de messages à purger**');
    if (args[0] > 100) return message.channel.send('**Veuillez fournir un nombre inférieur à 100**');
    message.channel.bulkDelete(args[0])
      .then(messages => message.channel.send(`**Supprimé avec succès \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({
        timeout: 1000000
      })))

    }