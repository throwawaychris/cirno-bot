const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gamerword')
        .setDescription('Says the thing!')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('to say the thing to')
                .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('target');

        await interaction.reply(`# NIGGER ${user}`);
    }
}