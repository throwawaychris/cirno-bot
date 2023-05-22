const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dieroll')
        .setDescription('Roll a random 6 sided dies')
        .addIntegerOption(option =>
            option
                .setName('amount')
                .setDescription('The number of dies to be rolled')),
    async execute(interaction) {
        //await interaction.reply('this is a WIP!');

        if (interaction.options.getInteger('amount') > 1 && interaction.options.getInteger('amount') <= 20) {
            let sum = 0;
            let msg = '';
            for (let i=0; i<interaction.options.getInteger('amount'); i++) {
                dieValue = Math.floor((Math.random()*6)+1);
                switch(dieValue) {
                    case 1:
                        die = ":one:";
                        break;
                    case 2:
                        die = ":two:";
                        break;
                    case 3:
                        die = ":three:";
                        break;
                    case 4:
                        die = ":four:";
                        break;
                    case 5:
                        die = ":five:";
                        break;
                    case 6:
                        die = ":six:";
                        break;
                }
                msg += `Rolled: ${die}\n`;
                sum+=dieValue;
            }
            await interaction.reply(`${msg}**Sum: ${sum}**`);
        } else if(interaction.options.getInteger('amount') > 20) {
            await interaction.reply(`**Too many rolls!**`);
        } else {
            dieValue = Math.floor((Math.random()*6)+1);
            switch(dieValue) {
                case 1:
                    die = ":one:";
                    break;
                case 2:
                    die = ":two:";
                    break;
                case 3:
                    die = ":three:";
                    break;
                case 4:
                    die = ":four:";
                    break;
                case 5:
                    die = ":five:";
                    break;
                case 6:
                    die = ":six:";
                    break;
            }
            await interaction.reply (`Rolled: ${die}`);
        }
    }
}