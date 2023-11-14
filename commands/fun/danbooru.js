const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('danbooru')
        .setDescription('Retrives a random danbooru image')
        .addBooleanOption(option =>
            option
                .setName('nsfw')
                .setDescription('Get an NSFW post'))
        .addStringOption(option =>
            option
                .setName('tag')
                .setDescription('Define a tag for the image (2 tags max)')),
    async execute(interaction) {
        let url = 'https://danbooru.donmai.us/posts/random.json?tags=';
        let response;
        let data;
        let danbooruColor = 0xf5318c;

        // Construct url
        if (interaction.options.getBoolean('nsfw')) {
            url += 'is:nsfw';
        }

        if (!(interaction.options.getString('tag') === null)) {
            url += `+${interaction.options.getString('tag')}`;
        }
        else {
            url += `+order:rank`;
        }

        //console.log(interaction.options.getBoolean('nsfw'));
        //console.log(url);

        //url = `https://danbooru.donmai.us/posts/2360472.json`;

        // fetch(url) TRY
        try {
            response = await fetch(url);
            data = await response.json();
        }
        catch (error) {
            console.log(error);
            await interaction.reply({content: `*Something went wrong!*`, ephemeral: true});
        }

        // End early with error reply if no fetch with url
        if (data.success === false) {
            await interaction.reply({content: `*Couldn't fetch; [Bad tags?](https://danbooru.donmai.us/wiki_pages/howto%3Atag)*`, ephemeral: true});
        }

        // Construct embed
        const danbooruEmbed = {
            color: danbooruColor,
            url: `https://danbooru.donmai.us/posts/${data.id}`,
            image: {
                url: `${data.file_url}`
            },
            title: `Artist: ${data.tag_string_artist}`,
            footer: {
                text: `Created: ${data.created_at}`
            },
        }

        //console.log(data.tag_string_ch)

        // Post embed
        //console.log(data);
        try {
            await interaction.reply({embeds: [danbooruEmbed]});
        } catch (error) {
            console.log(error);
            await interaction.reply({content: `***Opps**, found a gold-account restricted picture!*`, ephemeral: true});
        }

        //await interaction.followUp({content: `${url}`, ephemeral: true});
    },
};