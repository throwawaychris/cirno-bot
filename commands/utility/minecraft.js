const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minecraft')
        .setDescription('Sends minecraft-sever info embed'),
    async execute(interaction) {
        //await interaction.reply('Pong!');
        const author = interaction.options.getUser(210261734697467916);

        const minecraftEmbed = new EmbedBuilder()
        .setColor(0xFAB81E)
        .setTitle('You Work You Lose Minecraft-server')
        .setAuthor({name: `${author.username}`, iconURL: `${author.displayAvatarURL}`, url: 'https://github.com/throwawaychris'})
        .setDescription('Join: **by-sr.joinmc.link**')
        .setThumbnail('https://cdn.discordapp.com/attachments/1112181812534456390/1115790789335855204/server-icon.png')
        .setTimestamp();

        channel.send({embeds:[minecraftEmbed]});
    }
}