import { Interaction } from "discord.js";
import AtayaClient from "../../structure/AtayaClient";
import Event from "../../structure/Event";

export default class InteractionCreateEvent extends Event {
    constructor() {
        super('interactionCreate', {
            category: 'interaction',
            once: false
        });
    }

    /**
     * -----------------------------
     * Run interactionCreate event
     * -----------------------------
     * 
     * @param client {AtayaClient} represents the client
     * @param interaction {Interaction} represents the interaction
     */
    run(client: AtayaClient, interaction: Interaction) {
        if (interaction.isCommand() || interaction.isContextMenuCommand()) {
            const command = client.commands.get(interaction.commandName);

            if (!command) return interaction.reply("Cette commande n'existe pas");

            command.run(client, interaction);
        }
    }
}