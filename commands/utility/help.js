const { bold, italic, strikethrough, underscore, spoiler, quote, blockQuote } = require('discord.js');
const fs = require('fs');
const path = require('node:path');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Lists all available commands'),
    async execute(interaction) {
        let msg = "";// message line holding a command and its description

        const foldersPath = path.join(process.cwd(), 'commands');
        const commandFolders = fs.readdirSync(foldersPath);

        for (const folder of commandFolders) {
            const commandsPath = path.join(foldersPath, folder);
            const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const filePath = path.join(commandsPath, file);
                const command = require(filePath);

                // Append each file name into msg
                msg += `${bold(command.data.name)} - ${italic(command.data.description)} \n`;
            }
        }

        await interaction.reply({
            content: `# Commands\n${msg}`,
            ephemeral: true,
        });
    },
};