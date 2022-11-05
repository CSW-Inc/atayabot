import { ActivityType } from "discord.js";
import AtayaClient from "../../structure/AtayaClient";
import Command from "../../structure/Command";
import Event from "../../structure/Event";
import LogBuilder from "../../utils/LogBuilder";

export default class ReadyEvent extends Event {

    constructor() {
        super('ready', {
            category: "client",
            once: true
        });
    }

    /**
     * -----------------------------
     * Run ready event
     * -----------------------------
     * 
     * @param client {AtayaClient} represent the client
     */
    run(client: AtayaClient) {
        // !temporary
        const devGuild = client.guilds.cache.get('1019003042361778226');
        devGuild.commands.set(client.commands.map((command: Command) => command.data));

        // Configure status
        client.user.setPresence({
            status: 'idle',
            activities: [
                {
                    name: `${client.guilds.cache.size} serveur(s) | /help pour afficher l'aide`,
                    type: ActivityType.Watching
                }
            ]
        });
    }

}