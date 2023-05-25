const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('random')
        .setDescription('Generates a random number')
        .addIntegerOption(option => 
            option
                .setName('max')
                .setDescription('The max value of the random')
                .setRequired(true)),
    async execute(interaction) {
        //random number
        const max = interaction.options.getInteger('max');
        let d = Math.floor((Math.random()*max)+1);
        msg = "";
        last = -1;
        repeat = 0;
        
        await interaction.reply(`(**${d}**)`);

        while (d > 0) {            
            last = d % 10;
            d = Math.floor(d / 10);

            if (last === (d%10)) {
                repeat++;
            } else {break;}
        }

        // Process dubs
        switch (repeat) {
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
    }
}