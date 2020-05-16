const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

const PREFIX = '!';

bot.on('ready', () => {
    console.log(`${bot.user.username} zostal aktywowany!`)
    bot.user.setActivity('Cloud Bot', { type: `WATCHING` });
})

var version = '1.2.0';

bot.on('message', message =>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]){
        case 'vermsg':
            message.delete();

            let embedVer = new Discord.MessageEmbed()

                .setColor('#09ff00')
                .setTitle('Weryfikacja')
                .setDescription('Napisz na kanale #weryfikacja komende !verify, aby się zweryfikować');

            message.channel.send(embedVer);

            break;


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

bot.on('guildMemberAdd', member =>{

    console.log(`${member.user.username} dolaczyl na serwer!`);

    var role = member.guild.roles.find('name', 'niezweryfikowany');

    member.roles.add(role);
})


bot.on('message', async message =>{
    if(message.author.bot) return;
    if(message.content.toLowerCase() === '!verify' && message.channel.id === '711159459518349422'){
        const role = message.guild.roles.cache.get('711160695223222383');
        message.delete();
        if(role){
            try{
                await message.member.roles.add(role);
            }catch(err){
                console.log(err);
            }
        }
    }
})






bot.login(token);