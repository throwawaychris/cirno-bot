const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('random')
        .setDescription('Generates a random number')
        .addIntegerOption(option => 
            option
                .setName('max')
                .setDescription('The max value of the random')
                .setRequired(true))
        .addIntegerOption(option =>
            option
                .setName('repeat')
                .setDescription('The amount of random numbers to generate (default: 1)')),
    async execute(interaction) {
        //random number
        const MAX = interaction.options.getInteger('max');
        const REPEAT = interaction.options.getInteger('repeat')>0 ? interaction.options.getInteger('repeat') : 1;
        //console.log(`repeat: ${REPEAT}`);
        
        let d, d_msg = "";
        msg = "";
        last = -1;
        dubs = 0;
        n = 0;
        
        for (let i = 0; i < REPEAT; i++) {
            //console.log(`Entered for loop: ${i}`);
            d = Math.floor((Math.random()*MAX)+1);
            d_msg += `**${d}**\n`;

            while (d > 0) {            
                last = d % 10;
                d = Math.floor(d / 10);
    
                if (last === (d%10)) {
                    if (++n > dubs)
                        dubs = n;
                } else {break;}
            }
            
            //console.log(`${d}:${n}:${dubs}`);
            n = 0;
        }

        //console.log(d_msg);

        if (d_msg != "") {
            await interaction.reply(d_msg);
        } else {
            await interaction.reply('Huh?');
        }

        // Process dubs
        switch (dubs) {
            case 0:
                break;
            case 1:
                msg = "Nice dubs!";
                break;
            case 2:
                msg = "Holy trips!";
                break;
            case 3:
                msg = "Quads get!";
                break;
            default:
                msg = "https://cdn.discordapp.com/attachments/374708928497451020/1111148984556326953/2f8.gif";
                break;
        }

        if (msg != "") {
            await interaction.followUp(msg);
        }
    },
};