const env = require('../../.env')
const Telegram = require('telegraf/telegram')
const axios = require('axios')
const Markup = require('telegraf/markup')

const enviarMensagem = msg => {
    env.userID.forEach(id => {
        axios.get(`${env.apiUrl}/sendMessage?chat_id=${id}&text=${encodeURI(msg)}`)
            .catch(e => console.log(e))
    }
    )
}

setInterval(() => {
   enviarMensagem('Enviando a msg de forma assincrona')
}, 3000)


enviarMensagem('Enviando a mensagem de forma assíncrona')

const teclado = Markup.keyboard([
    ['Ok', 'Cancelar']
]).resize().oneTime().extra()

const telegram = new Telegram(env.token)
env.userID.forEach(id => {
    telegram.sendMessage(id, 'Essa é uma mensagem com teclado', teclado)

})
