const search = require('yt-search');

exports.run = (client, message, args, ops) => {

    search(args.join(' '), function(err, res) {
        if (err) return message.channel.send('Désolé, quelque chose s\'est mal passé');

        let videos = res.videos.slice(0, 10);

        let resp = '';
        for (var i in videos) {
            resp += `**[${parseInt(i)+1}]:** \`1-${videos[i].title}\`\n`;
        }

        resp += `\n**Choisissez un nombre entre \`1-${videos.length}\``;

        message.channel.send(resp);

        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

        const collector = message.channel.createMessageCollector(filter);

        collector.videos = videos;

        collector.once('collect', function(m) {

            let commandFile = require(`./play.js`);
            commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops);
        });
    });

}