// commands
const commands = (client, message) => {
    const iaCommands = {
        davinci3: "/bot",
        dalle: "/img"
    }
    
    let firstWord = message.text.substring(0, message.text.indexOf(" "));
    
    switch (firstWord) {
        case iaCommands.davinci3:
            const question = message.text.substring(message.text.indexOf(" "));
            getDavinciResponse(question).then((response) => {
                client.sendText(message.from === process.env.BOT_NUMBER ? message.to : message.from, response)
            })
            break;
            
            case iaCommands.dalle:
                const imgDescription = message.text.substring(message.text.indexOf(" "));
                getDalleResponse(imgDescription, message).then((imgUrl) => {
                client.sendImage(
                    message.from === process.env.PHONE_NUMBER ? message.to : message.from,
                    imgUrl,
                    imgDescription,
              'Imagem gerada pela IA DALL-E 🤖'
            )
        })
        break;
    }
}

module.exports = commands