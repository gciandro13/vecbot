const Telegraf = require('telegraf');
const assert = require('assert').strict;
const bot = new Telegraf('Your_Token_Here');
const vec = 'vec';
const fs = require('fs');
var lemmaArray = [];

readAllVecCommas("./vec.txt");


function readAllVecCommas(inputpath)
{
    try {
        // read contents of the file
        const data = fs.readFileSync(inputpath, 'UTF-8');
    
        // split the contents by new line. 
        const lines = data.split(/\r?\n/);
    
        // save all lines
        lines.forEach((line) => {
            lemmaArray.push(line);
        });
    } 
    catch (err) {
        console.error(err);
    }
 }




bot.start((message) => {
  console.log('started:', message.from.id);
  return message.reply('Ciao vec. Chiedimi una perla scrivendo: vec ');
})


bot.startPolling();


bot.on('text',message =>
{
  
    var messageFromClient = message.message.text;
   

    if (messageFromClient.trim().toUpperCase() === vec.trim().toUpperCase())
    {
        var randomNumber= Math.random() * (lemmaArray.length - 1);
        var randomIndex = Math.floor(randomNumber);
        return message.reply(lemmaArray[randomIndex]);

    }
    else
    {
            console.log("message: " + messageFromClient.trim() + " from:" + message.from.id);
            // return message.reply("Scrivi: vec");
    }
});