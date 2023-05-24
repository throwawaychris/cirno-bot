const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('retrieve a user\'s profile picture')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('The member to retrive image of')
                .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('target');

        //await interaction.reply('Sorry, this is a wip command!');
        //await interaction.reply(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=1024`);
        await interaction.reply(`${user.displayAvatarURL({ size: '1024' })}`);
        console.log(user.displayAvatarURL({ size: '1024' }));
    }
}