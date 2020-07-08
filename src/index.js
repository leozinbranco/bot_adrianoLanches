const discord = require('discord.js');
const bot = new discord.Client();
const fetch = require('node-fetch');
var moment = require('moment');
moment.locale('pt-BR');
const now = moment("09:30","HH:mm" );
//const Math = require('Math');
const data = new Date();

require('dotenv').config();
const token = process.env.TOKEN;


bot.login(token);


bot.once('ready', () => {
    console.log(`Bot online: ${bot.user.tag}`);
    
    console.log(now);
    //const horainicio = moment('1000','hhmm');
    //const horafim = moment('1010','hhmm');
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
//console.log(now.isBetween(quintaInicio, quintaFim));

        const Segunda = {
            primeiraAula(){
                return " \nNão tem aula em nenhuma das classes agora!";
            },
            segundaAula(){
                return " \nNão tem aula em nenhuma das classes agora!";
            },
            terceiraAula(){
                return " \n3B: aula com a Kátia - Biologia! \n3A: -------------------";
            },

            intervalo(){
                return " \nIntervalo  :partying_face: :partying_face: ";
            },

            quartaAula(){
                return " \n3B: aula com a Eliana - Ética! \n3A: ------------------- ";
            },
            quintaAula(){
                return " \n3B: ------------------- \n3A: aula com a Kátia - Mentoria de Biologia!";
            },

            sextaAula(){
                return " \n3B: aula com o PH - Química \n3A: aula com a Eliana - Ética!";
            },

            setimaAula(){
                return " \n3B: aula com o PH - Química \n3A: -------------------";
            }
        };

        const Terca = {
            primeiraAula(){
                return " \nNão tem aula em nenhuma das classes agora!";
            },
            segundaAula(){
                return " \n3B: ------------------- \n3A: aula com o Anderson - Matemática!";
            },
            terceiraAula(){
                return " \n3B: c \n  3A: aula com (?) - Física!";
            },

            intervalo(){
                return " \nIntervalo  :partying_face: :partying_face: ";
            },

            quartaAula(){
                return " \n3B: aula com a Kátia - Mentoria de Biologia! \n3A: aula com o Anderson - Matemática! ";
            },
            quintaAula(){
                return " \n3B: aula com o Anderson - Matemática! \n3A: ------------------- ";
            },

            sextaAula(){
                return " \n3B: ------------------- \n3A: aula com o Anderson - Matemática! ";
            },

            setimaAula(){
                return " \nNão tem aula em nenhuma das classes agora!";
            }
        };

        const Quarta = {
            primeiraAula(){
                return " \nNão tem aula em nenhuma das classes agora!";
            },
            segundaAula(){
                return " \nNão tem aula em nenhuma das classes agora!";
            },
            terceiraAula(){
                return " \nNão tem aula em nenhuma das classes agora!";
            },

            intervalo(){
                return " \nIntervalo  :partying_face: :partying_face: ";
            },

            quartaAula(){
                return " \n3B: ------------------- \n3A: aula com o PH - Química! ";
            },
            quintaAula(){
                return " \nNão tem aula em nenhuma das classes agora!";
            },

            sextaAula(){
                return " \n3B: ------------------- \n3A: aula com o Anderson - Mentoria de Matemática! ";
            },

            setimaAula(){
                return " \n3B: ------------------- \n3A: aula com o Anderson - CDP! ";
            }
        };

        const Quinta = {
            primeiraAula(){
                return " \nNão tem aula em nenhuma das classes agora!";
            },
            segundaAula(){
                return " \nNão tem aula em nenhuma das classes agora!";
            },
            terceiraAula(){
                return " \nNão tem aula em nenhuma das classes agora!";
            },

            intervalo(){
                return " \nIntervalo  :partying_face: :partying_face: ";
            },

            quartaAula(){
                return " \n3B: aula com o Beto - Marketing! \n3A: ------------------- ";
            },
            quintaAula(){
                return " \n3B: aula com o Beto - Marketing! \n3A: ------------------- ";
            },

            sextaAula(){
                return " \n3B: aula com o Beto - Marketing! \n3A: ------------------- ";
            },

            setimaAula(){
                return " \nNão tem aula em nenhuma das classes agora!";
            }
        };

        const Sexta = {
            primeiraAula(){
                return " \nNão tem aula em nenhuma das classes agora!";
            },
            segundaAula(){
                return " \nNão tem aula em nenhuma das classes agora!";
            },
            terceiraAula(){
                return " \n3B: ------------------- \n3A: aula com a Kátia - Biologia! ";
            },

            intervalo(){
                return " \nIntervalo  :partying_face: :partying_face: ";
            },

            quartaAula(){
                return " \n3B: aula com (?) - Física \n3A: ------------------- ";
            },
            quintaAula(){
                return " \n3B: aula com o Beto - Marketing! \n3A: aula com (?) - Física! ";
            },

            sextaAula(){
                return " \n3B: aula com o Beto - Marketing! \n3A: aula com o PH - Química! ";
            },

            setimaAula(){
                return " \n3B: aula com a Kátia - Biologia! \n3A: aula com o PH - Mentoria de Química! ";
            }
        };

        const Semana = {
            1(aula) {
                return Segunda[aula]();
            },

            2(aula){
                return Terca[aula]();
            },

            3(aula){
                return Quarta[aula]();
            },

            4(aula){
                return Quinta[aula]();
            },
            5(aula){
                return Sexta[aula]();
            }
        };

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

                        let aula;

                        if(now.isBetween(primeiraInicio, primeiraFim) || now.isSame(primeiraInicio) || now.isSame(primeiraFim))
                            aula = "primeiraAula";
                        
                        if(now.isBetween(segundaInicio, segundaFim) || now.isSame(segundaInicio) || now.isSame(segundaFim))
                            aula = "segundaAula";

                        if(now.isBetween(terceiraInicio, terceiraFim) || now.isSame(terceiraInicio)|| now.isSame(terceiraFim))
                            aula = "terceiraAula";

                        if(now.isBetween(intervaloInicio, intervaloFim) || now.isSame(intervaloInicio)|| now.isSame(intervaloFim))
                            aula = "intervalo";

                        if(now.isBetween(quartaInicio, quartaFim) || now.isSame(quartaInicio)|| now.isSame(quartaFim))
                            aula = "quartaAula";

                        if(now.isBetween(quintaInicio, quintaFim) || now.isSame(quintaInicio) || now.isSame(quintaFim))
                            aula = "quintaAula";

                        if(now.isBetween(sextaInicio, sextaFim) || now.isSame(sextaInicio) || now.isSame(sextaFim))
                            aula = "sextaAula";

                        if(now.isBetween(setimaInicio, setimaFim) || now.isSame(setimaInicio) || now.isSame(setimaFim))
                            aula = "setimaAula";

                        //console.log(Semana[data.getDay()]);
                        if(aula){
                            const message = Semana[data.getDay()](aula); //parenteses executa a função.
                            msg.reply(message); 
                        }   
                        else{
                            msg.reply("Não estamos em horário de aula, animal.");
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
        console.log(err);
    }
    

});
/*bot.port(port,function() {
    console.log("app running on port 8080"); });*/

//var server=app.listen();

