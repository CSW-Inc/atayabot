import { CommandInteraction, EmbedBuilder } from "discord.js";
import AtayaClient from "../../structure/AtayaClient";
import Command from "../../structure/Command";

export default class PingCommand extends Command {
    constructor() {
        super({
            name: "ping",
            description: "Affiche la latence du bot"
        });
    }

    run(client: AtayaClient, interaction: CommandInteraction) {
        const result = new EmbedBuilder()
            .setAuthor({
                name: interaction.user.username,
                iconURL: interaction.user.displayAvatarURL()
            })
            .setColor(0xFFFFFF)
            .setDescription(`La latence de ${client.user.username} est de **${client.ws.ping}** ms`);
        
        interaction.reply({
            embeds: [result]
        });
    }
}