// 
const Discord = require('discord.js');
const Bot = new Discord.Client({intents:[Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILDS]});
require('dotenv').config();

Bot.on('ready', ()=>{
    console.log("Bot is running");

    let commands = Bot.application.commands;

    commands.create({
        name: "sayhello",
        description:"reply hello to the user",
        options:[
            {
                name: "user",
                description:"The user you want to say hello to",
                required: true,
                type : Discord.Constants.ApplicationCommandOptionTypes.USER
            }
        ]
    });
})

Bot.on('interactionCreate',(interaction) => {
    if(!interaction.isCommand()) return;
    let name = interaction.commandName;
    let options  = interaction.options;

    if(name == "hello"){
        interaction.reply({
            content: "Hello you idiot!!!",
            ephemeral: false //if true only you can see the bot output
        })
    }
    if(name == "sayhello"){
        let user = options.getUser("user");

        interaction.reply({
            content: `Hello mr ${user.username}`,
            ephemeral: false
        })
    }
})

Bot.login(process.env.BOT_TOKKEN);



