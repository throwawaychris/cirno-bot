const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minecraft')
        .setDescription('Sends minecraft-sever info embed'),
    async execute(interaction) {
        //await interaction.reply('Pong!');

        const minecraftEmbed = new EmbedBuilder()
        .setColor(0xFAB81E)
        .setTitle('You Work You Lose Minecraft-server')
        .setAuthor({name: `throwawaychris`, url: 'https://github.com/throwawaychris'})
        .setDescription('Join: **by-sr.joinmc.link**')
        .setThumbnail('https://cdn.discordapp.com/attachments/1112181812534456390/1115790789335855204/server-icon.png')
        .setTimestamp();

        await interaction.reply({embeds:[minecraftEmbed]});
    }
}