const {Client, MessageMedia, LocalAuth} = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')

const client = new Client({
    authStrategy: new LocalAuth()
})

client.on('qr', qr => {
    qrcode.generate(qr, {small: true})
})

client.on('authenticated', (session) => console.log('Auth sucessful'))

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message_create', message => {
    const content = message.body

    if(content === 'oo') {
        client.sendMessage(message.from, 'Parabéns, funcionou')
	}
});

client.initialize();

module.exports = client