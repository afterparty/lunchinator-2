const { SlashCommandBuilder } = require('discord.js');
const { getTimeUntilTekken } = require('../helper.js');

const tekkentime = '19:00';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tekkentime')
		.setDescription('Gives days until Tekkentime'),
	async execute(interaction) {
		const remaining = getTimeUntilTekken(tekkentime);
		if (remaining.days > 0) {
			await interaction.reply('There are ' + remaining.days + ' days left. Get Ready For the Next Battle!');
		}
		else {
			await interaction.reply('It\'s TEKKEN TIME!');
		}
	},
};