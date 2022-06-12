const Discord = require('discord.js');
const Bot = new Discord.Client({intents:[Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILDS]});
require('dotenv').config();

Bot.on('ready', ()=> {
    console.log("Bot started running");

    const commands = Bot.application.commands;

    commands.create({
        name: 'hello',
        description: "This says hello to your message"
    })
})

Bot.on('interactionCreate', (interaction)=>{
    if(!interaction.isCommand())return;
    
    let name = interaction.commandName;
    let options = interaction.options;

    if(name == 'hello'){
        interaction.reply({
            content: "Hello there",
            ephemeral: false
        })
    }
})