import { green } from "colors";
import { readdirSync } from "fs";
import { sep } from "path";
import LogBuilder from "../utils/LogBuilder";
import AtayaClient from "./AtayaClient";
import Command from "./Command";

export default class CommandHandler {    
    private directory: string;
    private client: AtayaClient;

    constructor(directory: string, client: AtayaClient) {
        this.directory = directory;
        this.client = client;
    }

    /**
     * -----------------------------
     * Run command handler
     * -----------------------------
     */
    public run() {
        readdirSync(this.directory).forEach(async (category: string) => {
            const commands = readdirSync(`${this.directory}${sep}${category}${sep}`).filter((files: string) => files.endsWith('.ts') || files.endsWith('.js'));
  
            for (const file of commands) {
                const command = new (await import(`${this.directory}/${category}/${file}`)).default;
                this.saveCommand(command);
            }
        });
    }

    /**
     * -----------------------------
     * Save command to cache
     * -----------------------------
     * 
     * @param command {Command} represents the command to save into cache
     */
    private async saveCommand(command: Command) {
        this.client.commands.set(command.data.name, command);
        new LogBuilder()
            .setType('success')
            .setService('system')
            .setShowDate(true)
            .setMessage(`La commande ${green(command.data.name)} a bien été enregistrée.`)
            .log();
   }

}