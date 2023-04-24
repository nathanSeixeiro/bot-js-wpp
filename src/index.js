const connect = require('./connection')

async function start(){
   await connect()
}

start()