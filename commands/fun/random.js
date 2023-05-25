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
        repeating = 0;

        await interaction.reply(`(${d})`);

        while (number > 0) {
            if (last === (d%10)) { repeating++ };
            
            last = d % 10;
            d = d / 10;
        }

        // Process dubs
        switch (repeating) {
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

        await interaction.followUp(msg);
    }
}