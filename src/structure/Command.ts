import { ApplicationCommandData, CommandInteraction, ContextMenuCommandInteraction } from "discord.js";
import AtayaClient from "./AtayaClient";

export default abstract class Command {
    public data: ApplicationCommandData;

    constructor(data: ApplicationCommandData) {
        this.data = data;
    }

    /**
     * -----------------------------
     * Run command
     * -----------------------------
     * 
     * @param client {AtayaClient}
     * @param interaction {BaseInteraction}
     */
    abstract run(client: AtayaClient, interaction: CommandInteraction | ContextMenuCommandInteraction): any;
}