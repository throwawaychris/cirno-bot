const { SlashCommandBuilder } = require('discord.js');
i = 0;
quote = '';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Ask the magic eight ball!')
        .addStringOption(option =>
            option
                .setName('question')
                .setDescription('Your question for the magic 8ball')),
    async execute(interaction) {
        // Roll the dice
        i = Math.floor(Math.random() * 8);

        // Get a quote
        switch (i) {
            case 0:
                quote = "Yeah!";
                break;
            case 1:
                quote = "No.";
                break;
            case 2:
                quote = "Maybe?";
                break;
            case 3:
                quote = "I'm certain of it!";
                break;
            case 4:
                quote = "I think you should ask Daiyousei...";
                break;
            case 5:
                quote = "I'm the strongest!";
                break;
            case 6:
                quote = "It's Reimu's fault!";
                break;
            case 7:
                quote = "Uh... Ask me again later.";
                break;
        }

        if (interaction.options.getString('question') === null) {
            await interaction.reply(`**${quote}**`);
        } else {
            const question = interaction.options.getString('question');
            await interaction.reply(`> *${question}*\n**${quote}**`);
            //await interaction.reply(quote);
        }
    },
};