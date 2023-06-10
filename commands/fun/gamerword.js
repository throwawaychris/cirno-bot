const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gamerword')
        .setDescription('Says the thing!')
        .setDefaultMemberPermissions(0),
    async execute(interaction) {
        await interaction.reply(`# NIGGER`);
    }
}