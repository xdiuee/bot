const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

const PREFIX = '!';

bot.on('ready', () => {
    console.log('This bot is online!')
    bot.user.setActivity('YouTube', { type: 'WATCHING' });
})

var version = '1.1.0';

bot.on('guildMemberAdd', member => {
    
    let embedJoin = new Discord.MessageEmbed()

        .setColor('#09ff00')
        .setTitle('Cloud Bot')
        .setDescription(`Siemka ${member.user.username}! Właśnie dołączyłeś do serwera **Cloud Bot**!`)
        .addField(`_Wchodząc na serwer akceptuje regulamin!_`)

    member.send(embedJoin);



});

bot.on('message', message =>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]){
        case 'help':

            let embedHelp = new Discord.MessageEmbed()

                .setColor('#09ff00')
                .setTitle('Cloud Bot Help')
                .addField('Sprawdź wersje bota.', '!version');

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