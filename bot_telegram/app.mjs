//Agregar comando "snapshot" que del lado del controlador 
// ejecute un comando o código tal que se saque una foto con la webcam 
// y la envíe al bot
//TIP: se puede usar el ejemplo de fswebcam  

// Documentación modulo telegraf: https://telegraf.js.org/

import {Telegraf} from 'telegraf'

console.log('Token: '+process.env.TOKEN)

const bot = new Telegraf(process.env.TOKEN)

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id,"Hola, los comandos disponibles son: /fotos")
})

bot.command('fotos', ctx => {
    console.log(ctx.from)
    const message='Seleccione la imagen'
    bot.telegram.sendMessage(ctx.chat.id, message, {
    reply_markup: {
        inline_keyboard: [[
            {
                text: "linux",
                callback_data: 'linux'
            },
            {
                text: "nodejs",
                callback_data: 'nodejs'
            }
        ]]
    }    
    })
})

bot.action('linux', ctx=>{
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "images/linux.jpg"
    })
})
bot.action('nodejs', ctx=>{
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "images/nodejs.jpg"
    })
})

bot.launch()