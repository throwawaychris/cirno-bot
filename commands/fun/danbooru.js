const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('danbooru')
        .setDescription('Retrives a random danbooru image')
        .addStringOption(option =>
            option
                .setName('tag')
                .setDescription('Define a tag for the image')),
    async execute(interaction) {
        const url = 'https://safebooru.donmai.us/posts/random?tags=is:sfw+cirno';

        await interaction.reply(url);
    }
}