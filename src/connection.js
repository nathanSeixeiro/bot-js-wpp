const {default: makeWASocket, DisconnectReason} = require('@adiwajshing/baileys')

async function connect(){
    const bot = makeWASocket({
        printQRInTerminal: true,
        defaultQueryTimeoutMs: undefined
   })

   bot.env.on('connection.update', (update) =>{
    const {conn, lastDisconn} = update
    if(conn === 'close'){
        const shouldReconnect = lastDisconn.error?.output?.statuscode !== DisconnectReason.loggedOut
    }
    if(shouldReconnect){
        connect()
    }
   })

   return bot
}

module.exports = connect