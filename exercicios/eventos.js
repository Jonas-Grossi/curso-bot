const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
bot.start(ctx => {
    const name = ctx.message.from.first_name
    ctx.reply(`Seja bem vindo,${name}!`)


})

bot.on('text', ctx => {
    const text = ctx.update.message.text
    ctx.reply(`Texto "${text}" recebido com sucesso`)
})
bot.on('location', ctx => {
    const l = ctx.update.message.location
    console.log(l)
    ctx.reply(`Entendido,você está em 
    Lat:${l.latitude},
    Long:${l.longitude}!`)

})
bot.on('contact', ctx => {
    const c = ctx.update.message.contact
    console.log(c)
    ctx.reply(`Vou lembrar do(a)${c.first_name} ( 
    ${c.phone_number})`)

})
bot.on('voice', ctx => {
    const v = ctx.update.message.voice
    console.log(v)
    ctx.reply(`Audio recebido,ele possui ${v.duration} segundos`)
})

bot.on('photo', ctx => {
    const p = ctx.update.message.photo
    console.log(p)
    p.forEach((ph, i) => {
        ctx.reply(`Photo ${i} tem resolução de ${ph.width}x${ph.height}`)
    })

})

bot.on('sticker', ctx => {
    const s = ctx.update.message.sticker
    console.log(s)
    ctx.reply(`Estou vendo que você enviou o ${s.emoji} do conjunto ${s.set_name}`)
})



bot.startPolling()