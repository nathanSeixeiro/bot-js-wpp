const {default: makeWASocket, DisconnectReason, useMultiFileAuthState} = require('@adiwajshing/baileys')

async function connect(){
    const {state, saveCreds} = await useMultiFileAuthState('./assets/auth/baileys')
    const bot = makeWASocket({
        auth: state,
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

   bot.env.on('creds.update', saveCreds)

   return bot
}

module.exports = connect