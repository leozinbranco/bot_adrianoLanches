const discord = require('discord.js');
const bot = new discord.Client();
const fetch = require('node-fetch');
var moment = require('moment');
moment.locale('pt-BR');
const now = moment();
//const Math = require('Math');
const data = new Date();

require('dotenv').config();
const token = process.env.TOKEN;

bot.login(token);


bot.once('ready', () => {
    console.log(`Bot online: ${bot.user.tag}`);
    
    //console.log(now);
    //console.log(now.isBetween(horainicio, horafim));
        //console.log(time.isBetween('', ''));
    //console.log(moment('12 19').isBetween('12 00', '12 30', 'minute', '[]'));
    
});

bot.on('guildMemberAdd', membro => { 
    membro.send('Bem vindo corno manso!')
});



const primeiraInicio = moment("07:00", "HH:mm");
const primeiraFim = moment("07:49", "HH:mm");
const segundaInicio = moment("07:50", "HH:mm");
const segundaFim = moment("08:39", "HH:mm");
const terceiraInicio = moment("08:40", "HH:mm");
const terceiraFim = moment("09:29", "HH:mm");
const intervaloInicio = moment("09:30", "HH:mm");
const intervaloFim = moment("09:49", "HH:mm"); 
const quartaInicio = moment("09:50", "HH:mm");
const quartaFim = moment("10:39", "HH:mm");
const quintaInicio = moment("10:40", "HH:mm");
const quintaFim = moment("11:29", "HH:mm");
const sextaInicio = moment("11:30", "HH:mm");
const sextaFim = moment("12:19", "HH:mm");
const setimaInicio = moment("12:20", "HH:mm");
const setimaFim = moment("13:10", "HH:mm");
//console.log(now);
//console.log(now.isBetween(quartaInicio, quartaFim));

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

            case '!escola':
                if(data.getDay() == 6 || data.getDay() == 0 ){ //0 = domingo, 6= sabado
                    msg.reply("Não tem aula hoje, amigo.");
                }
                else{
                   //if()
                    

                    if(data.getHours() == 7 && data.getMinutes() < 50 )
                    {
                        msg.reply("Não tem aula em nenhuma das salas esse horário");
                    }
                    else{
                        switch(data.getDay())
                        {
                            case 1: //segunda
                                    
                                            if(now.isBetween(primeiraInicio, primeiraFim))
                                            return msg.reply("Não tem aula em nenhuma das classes agora!");
                                       
                                        
                                            if(now.isBetween(segundaInicio, segundaFim))
                                            return msg.reply("Não tem aula em nenhuma das classes agora!"); 
                                     
                                            if(now.isBetween(terceiraInicio, terceiraFim))
                                            return msg.reply("3B tem aula de:     História, com o Olavo.");
                                        
                                        
                                            if(now.isBetween(intervaloInicio, intervaloFim))
                                            return msg.reply("Intervalo  :partying_face: :partying_face: ");
                                       
                                            if(now.isBetween(quartaInicio, quartaFim))
                                            return msg.reply("3A tem aula de: História, com o Olavo.  \n 3B tem aula de: So/Fi, com a Vera");
                                     

                                            if(now.isBetween(quintaInicio, quintaFim))
                                            return msg.reply("3A tem aula de: So/Fi, com a Vera.");
                                        
            
                                            if(now.isBetween(sextaInicio, sextaFim))
                                            return msg.reply("Não tem aula em nenhuma das classes agora!");
            
                                            if(now.isBetween(setimaInicio, setimaFim))
                                            return msg.reply("Não tem aula em nenhuma das classes agora!");

                                        return(msg.reply("Não está em horário de aula!"));
                                            
                                       
                                    
                            break;

                            case 2: //terça
                                
                                        if(now.isBetween(primeiraInicio, primeiraFim))
                                        return   msg.reply("3A tem aula de: Português, com a Marina.");
                                        
                                        
                                        if(now.isBetween(segundaInicio, segundaFim))
                                        return    msg.reply("3A tem aula de: Português(Mentoria), com a Marina."); 
                                        
            
                                        if(now.isBetween(terceiraInicio, terceiraFim))
                                        return   msg.reply("3A tem aula de: Artes, com o Rafael.");
                                        
                                        
                                        if( now.isBetween(intervaloInicio, intervaloFim))
                                        return  msg.reply("Intervalo  :partying_face: :partying_face: ");
                                        
            
                                        if(now.isBetween(quartaInicio, quartaFim))
                                        return   msg.reply("3A tem aula de: Artes, com o Rafael.");
                                        
                                        if(now.isBetween(quintaInicio, quintaFim))
                                        return   msg.reply("3B tem aula de: Artes, com o Rafael.");
                                        
            
                                        if(now.isBetween(sextaInicio, sextaFim))
                                        return  msg.reply("3A tem aula de: Português, com a Marina.");
                                        
            
                                        if(now.isBetween(setimaInicio, setimaFim))
                                        return  msg.reply("Não tem aula em nenhuma das classes agora!");
                                        

                                        return(msg.reply("Não está em horário de aula!"));
                                    
                                
                            break;

                            case 3: //quarta
                                
                                        if (now.isBetween(primeiraInicio, primeiraFim))
                                        return  msg.reply("Não tem aula em nenhuma das classes agora!");
                                        
                                        
                                        if (now.isBetween(segundaInicio, segundaFim))
                                        return  msg.reply("Não tem aula em nenhuma das classes agora!");
                                        
            
                                        if(now.isBetween(terceiraInicio, terceiraFim))
                                        return  msg.reply("Não tem aula em nenhuma das classes agora!");
                                        
                                    
                                        if (now.isBetween(intervaloInicio, intervaloFim))
                                        return  msg.reply("Intervalo  :partying_face: :partying_face: ");
                                       
            
                                        if (now.isBetween(quartaInicio, quartaFim))
                                        return  msg.reply("3A tem aula de: Português, com a Marina.");
                                        
                                        if( now.isBetween(quintaInicio, quintaFim))
                                        return  msg.reply("3A tem aula de: Interação e Comunicação, com a Marina.");
                                        
            
                                        if (now.isBetween(sextaInicio, sextaFim))
                                        return  msg.reply("3B tem aula de: Português, com a Marina.");
                                        
            
                                        if (now.isBetween(setimaInicio, setimaFim))
                                        return  msg.reply("Não tem aula em nenhuma das classes agora!");
                                        

                                            return(msg.reply("Não está em horário de aula!"));
                                        
                                    
                                
                            break;

                            case 4: //quinta
                                
                                        if(now.isBetween(primeiraInicio, primeiraFim))
                                        return  msg.reply("Não tem aula em nenhuma das classes agora!");
                                        
                                        
                                        if (now.isBetween(segundaInicio, segundaFim))
                                        return  msg.reply("Não tem aula em nenhuma das classes agora!");
                                        
            
                                        if(now.isBetween(terceiraInicio, terceiraFim))
                                        return  msg.reply("Não tem aula em nenhuma das classes agora!");
                                        
                                        
                                        if (now.isBetween(intervaloInicio, intervaloFim))
                                        return  msg.reply("Intervalo  :partying_face: :partying_face: ");
                                        
            
                                        if (now.isBetween(quartaInicio, quartaFim))
                                        return  msg.reply("3B tem aula de: Qualificação. \n 3A tem aula de: História, com o Olavo.");
                                       
            
                                        if( now.isBetween(quintaInicio, quintaFim))
                                        return  msg.reply("3B tem aula de: Qualificação. \n 3A tem aula de: Geografia, com o Zé.");
                                        
            
                                        if( now.isBetween(sextaInicio, sextaFim))
                                        return  msg.reply("3B tem aula de: Qualificação. \n 3A tem aula de: Ingles, com a Isabela.");
                                       
            
                                        if (now.isBetween(setimaInicio, setimaFim))
                                        return  msg.reply("3A tem aula de: Geografia, com o Zé.");
                                        
                                        
                                            return(msg.reply("Não está em horário de aula!"));
                                        
                                    
                                
                            break;
                             
                            
                            case 5: //sexta
                                    
                                        if(now.isBetween(primeiraInicio, primeiraFim))
                                        return msg.reply("Não tem aula em nenhuma das classes agora!");
                                     

                                        if (now.isBetween(segundaInicio, segundaFim))
                                        return msg.reply("Não tem aula em nenhuma das classes agora!");
                                        
            
                                        if (now.isBetween(terceiraInicio, terceiraFim))
                                        return msg.reply("Não tem aula em nenhuma das classes agora!");
                                       
                                        
                                        if (now.isBetween(intervaloInicio, intervaloFim))
                                        return msg.reply("Intervalo  :partying_face: :partying_face: ");
                                        
                                    
            
                                        if(now.isBetween(quartaInicio, quartaFim))
                                        return msg.reply("3B tem aula de: Qualificação \n 3A tem aula de: Ed. Física, com o Daimier.");
                                        
            
                                        if(now.isBetween(quintaInicio, quintaFim))
                                        return msg.reply("3B tem aula de: Qualificação. \n 3A tem aula de: História, com o Olavo. ");
                                        
                                        
            
                                        if(now.isBetween(sextaInicio, sextaFim))
                                        return msg.reply("3B tem aula de: Qualificação. \n 3A tem aula de: Geografia, com o Zé.");
                                        
            
                                    if(now.isBetween(setimaInicio, setimaFim))
                                    return  msg.reply("Não tem aula em nenhuma das classes agora!");
                                        
                                        
                                        return(msg.reply("Não está em horário de aula!"));

                            break;

                        }

                    }

                    
                }
                
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
        msg.channel.send("Ocorreu um erro durante a execução! bip bip ");
    }
    

});
/*bot.port(port,function() {
    console.log("app running on port 8080"); });*/

//var server=app.listen();

