const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gay')
        .setDescription('Constructs a lovely image'),
    async execute(interaction) {
        // Create a 700x250 pixel canvas and get its context
        // The context will be used to modify the canvas
        const canvas = Canvas.createCanvas(700, 250);
        const context = canvas.getContext('2d');

        const backgroudn = await Canvas.loadImage('../../src/img/flowers.jpg')

        // This uses the canvas dimensions to stretch the image onto the entire canvas
	    context.drawImage(background, 0, 0, canvas.width, canvas.height);

        // Use the helpful Attachment class structure to process the file for you
	    const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'gay-image.png' });

        await interaction.reply({ files: [attachment]});
    }
}