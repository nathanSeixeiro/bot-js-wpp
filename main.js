import {connectToWhatsapp} from './src/bailey'
async function start(){
   const bot = await connectToWhatsapp()
}

start()