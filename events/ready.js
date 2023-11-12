const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		const activity = "God!";

		// Initially setting the activity status
		try {
			if (client.user.setActivity(activity)) {
				console.log(`Ready! Changed activity to ${activity}`);
			}
		} catch (error) {
			console.log(`Failed to change activity status`);
		}

		// Initialization complete flag
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};
