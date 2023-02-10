const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
//const id = env.userID
const id = env.userID



bot.start(ctx => {
    
    console.log(typeof (id))
    const from = ctx.message.from
    console.log(from)
    
    if (id.includes(from.id))
        ctx.reply('Ao seu dispor, Mestre!!')
    else {
        ctx.reply('Sinto muito,mas so falo com meu mestre')

    }
})

bot.startPolling()
