const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

const PREFIX = '!';

const cheerio = require('cheerio');

const request = require('request');

bot.on('ready', () => {
    console.log(`${bot.user.username} zostal aktywowany!`)
    bot.user.setActivity('Cloud Bot', { type: `WATCHING` });
})

var version = '1.2.0';

function image(message){

    var options = {
        url: "https://results.dogpile.com/serp?qc=images&q=" + "cursed image",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    }

}

request(options, function(error, response, responseBody){
    if(error){
        return;
    }

    $ = cheerio.load(responseBody);

    var links = $(".image a.link");

    var urls = new Array(links.length).fill(0).map((v, i)=> links.eq(i).attr("href"));

    console.log(urls);

    if(!urls.length){
        return;
    }

    message.channel.send(urls[0]);
})

bot.on('message', message =>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]){
        case 'image':
            image(message);
            break;
        case 'help':

            let embedHelp = new Discord.MessageEmbed()

                .setColor('#09ff00')
                .setTitle('Cloud Bot Help')
                .addField('Sprawdź wersje bota.', '!version')
                .addField('Włącz muzyke', '!play');

            message.channel.send(embedHelp);

            break;
        case 'info':
            
            let icon = bot.user.displayAvatarURL();
            let embedInfo = new Discord.MessageEmbed()

            embedInfo.setColor('#09ff00');
            embedInfo.setTitle('Bot Information');
            embedInfo.setThumbnail(icon);
            embedInfo.addField('Name', bot.user.username);
            embedInfo.addField('Stworzony przez', 'iuee');

            message.channel.send(embedInfo);
            break;
        case 'version':
            message.channel.send(`Version: ${version}`)
            break;
    }

})









bot.login(token);