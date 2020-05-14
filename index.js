const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

const PREFIX = '!';

bot.on('ready', () => {
    console.log('This bot is online!')
})

var version = '1.0.1';

bot.on("guildMemberAdd", function(message){

    let guild = message.guild;
    let member = message;
    let memberCount = client.user.size;

    let embedJoin = new Discord.MessageEmbed()
        .setColor('#09ff00')
        .setTitle(`Cloud Bot`)
        .setDescription(`Witaj ${member.user}! Na discordzie Cloud Bot`)
        .setThumbnail(member.user.avatarURL);
    
    member.guild.channel.find(`name`, `welcome`).send({ embed: embedJoin });
    
})

bot.on("guildMemberAdd", member => {
    var memberRole = member.guild.roles.find(`name`, `Member`);
    member.addRole(memberRole);
})

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