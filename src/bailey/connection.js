import makeWASocket, { DisconnectReason } from '@adiwajshing/baileys'

 export async function connectToWhatsapp(){
    const bot = makeWASocket({
        printQRInTerminal: true,
        defaultQueryTimeoutMs: undefined
    })

    bot.ev.on('connection.update', (update) => { 
        const {conn, lastDisconn} = update
        
        if(conn === 'close'){
            const shouldReconn = lastDisconn.error?.output?.statusCode !== DisconnectReason
            if(shouldReconn){
                connectToWhatsapp()
            }
        }
    })

    return bot
 }