import { green } from "colors";
import { readdirSync } from "fs";
import { sep } from "path";
import LogBuilder from "../utils/LogBuilder";
import AtayaClient from "./AtayaClient";
import Event from "./Event";

export default class EventHandler {
    private directory: string;
    private client: AtayaClient;

    constructor(directory: string, client: AtayaClient) {
        this.directory = directory;
        this.client = client;
    }

    /**
     * -----------------------------
     * Run EventHandler
     * -----------------------------
     */
    public run() {
        readdirSync(this.directory).forEach(async (category: string) => {
            const events = readdirSync(`${this.directory}${sep}${category}${sep}`).filter((files: string) => files.endsWith('.ts') || files.endsWith('.js'));

            for (const file of events) {
                const event: Event = (await import(`${this.directory}/${category}/${file}`)).default;
                this.loadEvent(event);
            }
        });
    }

    /**
     * -----------------------------
     * Load discord event by on or once méthod
     * -----------------------------
     * 
     * @param event {Event} represents the discord event
     */
    private loadEvent(event: Event) {
        if (event.options.once) {
            this.client.once(event.name, event.run.bind(null, this.client));
        } else this.client.on(event.name, event.run.bind(null, this.client));
        
        new LogBuilder()
            .setType('success')
            .setService('system')
            .setShowDate(true)
            .setMessage(`L'événement ${green(event.name)} a bien été chargée avec succès.`)
            .log();
    }
}