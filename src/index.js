const discord = require('discord.js');
const bot = new discord.Client();
const fetch = require('node-fetch');
var port = process.env.PORT || 8080;
//const Math = require('Math');

bot.login("NzE0NTE5MzE3NzM5MjA4Nzk1.Xu6-7g.TaTPZOrvR2E83Luhtb7jR3dTNmk");


const PORT = process.env.PORT || 3000;
const connection = () =>{
    app.listen(PORT, () => {
        console.log(`Our app is running on port ${ PORT }`);
    });
}  
bot.once('ready', () => {
    console.log(`Bot online: ${bot.user.tag}`);
    connection();
});

bot.on('guildMemberAdd', membro => { 
    membro.send(`Bem vindo corno manso!`)
});



bot.on('message', async msg => {

    try{
        var frases = ['Kauan saiba que todos(@everyone) te odiamos.😆',
                'Math te amo! 🥰',
                'Aqui todos praticamos o Ricardismo.',
                'Meu dono é o cara mais foda desse servidor.',
                'O @Kauan#7156 já tem 24h consecutivas jogando lol!'];

        switch(msg.content)
        {
            case '!cu':
                var frase = frases[Math.floor(Math.random() * frases.length)];
                msg.reply(frase);
            break;

            case '!meow':
                    const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
                    msg.channel.send(file);
                    msg.channel.send("Gatos foda");
            break;
        }

/* if(msg.content === '!cu')
        {
            /*let channel = msg.guild.channels.get('541323621453529100')
            channel.send(frases[Math.floor(Math.random() * frases.length)]);
            //msg.channel.send('@everyone' + frases[Math.floor(Math.random() * frases.length)]);
            var frase = frases[Math.floor(Math.random() * frases.length)];
            msg.reply(frase);
        } */
    }catch(err)
    {
        console.log(err);
    }
    

});
/*bot.port(port,function() {
    console.log("app running on port 8080"); });*/

//var server=app.listen();

