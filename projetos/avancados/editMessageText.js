env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

let level = 3
const getLevel = () => {
    let label = ''
    for (let i = 1; i <= 5; i++) {
        label += (level === i) ? '||' : '='
    }
    return label
}
const botoes = () => Extra.markup(Markup.inlineKeyboard([
    Markup.callbackButton('<<', '<'),
    Markup.callbackButton(getLevel(), 'result'),
    Markup.callbackButton('>>', '>'),
], { columns: 3 }))

bot.start(ctx => {
    const name = ctx.update.message
    ctx.reply(`Seja bem vindo, ${name}`)
    ctx.reply(`Nivel:${level}`, botoes())
})

bot.action('<', ctx => {
    if (level === 1) {
        ctx.answerCbQuery('Chegou no limite')
    } else {
        level--
        ctx.editMessageText(`Nivel: ${level}`, botoes())
    }
})

bot.action('>', ctx => {
    if (level === 5) {
        ctx.answerCbQuery('Chegou no limite')
    } else {
        level++
        ctx.editMessageText(`Nivel: ${level}`, botoes())
    }
})

bot.action('result', ctx => {

    ctx.answerCbQuery(`O nivel atual esta em: ${level}`)


})

bot.startPolling()



