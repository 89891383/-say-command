const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    permission: "MANAGE_SERVER",
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('The bot says what you tell it to.')
        .addStringOption(option => option.setName('say').setDescription('Put what you have to say here mother fucker').setRequired(true)),
		
        
	async execute(interaction) {
        console.log(`${interaction.user.tag} in #${interaction.channel.name} Trigged the Say command.`);
        const fuck = interaction.options.getString('say');
		return interaction.reply({ content: `${fuck}` })
	},
};