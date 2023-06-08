const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('minecraft')
        .setDescription('Sends minecraft-sever info embed'),
    async execute(interaction) {

        const minecraftEmbed = new EmbedBuilder()
        .setColor(0xFAB81E)
        .setTitle('by-sr.joinmc.link')
        .setURL('https://cdn.discordapp.com/attachments/1116051579825553428/1116103069667709039/image.png')
        .setDescription('Minecraft-server by *@throwawaychris*')
        .setThumbnail('https://cdn.discordapp.com/attachments/1116051579825553428/1116202069137817663/server-icon.png')
        .addFields({name: 'Minecraft-version', value: '[Minecraft 1.19.2](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-19-2)\n[Forge 43.2.0](https://files.minecraftforge.net/net/minecraftforge/forge/index_1.19.2.html)'})
        .addFields({name: 'Mod-Pack', value:
            '[Mods.zip](https://cdn.discordapp.com/attachments/1116051579825553428/1116195272083652658/mods_1.19.2.zip)\n'})
        .setImage('https://cdn.discordapp.com/attachments/1116051579825553428/1116103069667709039/image.png')
        .setTimestamp();

        await interaction.reply({embeds:[minecraftEmbed]});
    }
}