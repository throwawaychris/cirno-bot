const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dieroll')
        .setDescription('Roll random dies'),
    async execute(interaction) {
        await interaction.reply('this is a WIP!');
    }
}