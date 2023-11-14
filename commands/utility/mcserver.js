const { SlashCommandBuilder } = require('discord.js');
const { ipaddr, server_title, server_icon } = require('../../configs/mcserver.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mcserver')
        .setDescription('Get the minecraft server information'),
    async execute(interaction) {
        // Construct server status url
        let url = `https://api.mcstatus.io/v2/status/java/${ipaddr}`;
        let data, response;

        // Fetch the mcstatus.io json 
        try {
            response = await fetch(url);
            data = await response.json();
        }
        catch (error) {
            console.log(error);
            await interaction.reply({ content: `*Something went wrong!*`, ephemeral: true });
        }

        // End early with error reply if no fetch with url
        if (data.success === false) {
            await interaction.reply({ content: `*Couldn't fetch server status for ${ipaddr}`, ephemeral: true });
        }

        // Create the embed file

        const mcserverEmbed = {
            color: 0x32a854,
            title: server_title,
            description: `\`\`\`${data.motd.clean}\`\`\``,
            thumbnail: {
                url: server_icon,
            },            
            fields: [
                {
                    name: 'ip-address:',
                    value: `\`\`\`${data.host}\`\`\``,
                    inline: true,
                },
                {
                    name: 'status:',
                    value: `\`\`\`${data.online ? `Online!` : `Offline...`}\`\`\``,
                    inline: true,
                },
                {
                    name: 'players: ',
                    value: `\`\`\`${data.players.online} / ${data.players.max}\`\`\``,
                    inline: true,
                },
            ],
        }

        // Post the data
        await interaction.reply({embeds: [mcserverEmbed]});
        await interaction.followUp(`Play with us at __*${ipaddr}*__!`);
    },
};