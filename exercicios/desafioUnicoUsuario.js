const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const id = env.id

bot.start(ctx => {
    const from = ctx.message.from
    console.log(from)
    from.id === id ? ctx.reply('Ao seu dispor, Mestre!!') :
        ctx.reply('Sinto muito,mas so falo com meu mestre')


})

bot.startPolling()
