const discord = require('discord.js');
const bot = new discord.Client();
//const Math = require('Math');

bot.login("NzE0NTE5MzE3NzM5MjA4Nzk1.XswfOQ.dvAOWVIt_r_LbdmhL3vqyjhyRFA");

bot.once('ready', () => {
    console.log(`Bot online: ${bot.user.tag}`);
});

bot.on('guildMemberAdd', membro => { 
    membro.send(`Bem vindo corno manso!`)
});



bot.on('message', msg => {

    try{
        var frases = ['Kauan saiba que todos(@everyone) te odiamos.😆',
                'Math te amo! 🥰',
                'Aqui todos praticamos o Ricardismo.',
                'Meu dono é o cara mais foda desse servidor.',
                'O @Kauan#7156 já tem 24h consecutivas jogando lol!'];

        if(msg.content === '!cu')
        {
            /*let channel = msg.guild.channels.get('541323621453529100')
            channel.send(frases[Math.floor(Math.random() * frases.length)]);*/
            //msg.channel.send('@everyone' + frases[Math.floor(Math.random() * frases.length)]);
            var frase = frases[Math.floor(Math.random() * frases.length)];
            msg.reply(frase);
        }
    }catch(err)
    {
        console.log(err);
    }
    

});