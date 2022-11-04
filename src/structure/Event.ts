import { ClientEvents } from "discord.js";
import { EventOptions } from "../../types/Event";
import AtayaClient from "./AtayaClient";

export default abstract class Event {
    public name: keyof ClientEvents;
    public options: EventOptions;

    constructor(name: keyof ClientEvents, options: EventOptions) {
        this.name = name;
        this.options = options;
    }

    /**
     * -----------------------------
     * Run event
     * -----------------------------
     * 
     * @param client [AtayaClient] client which represents bot
     * @param args {any[]} arguments of the event
     */
    abstract run(client: AtayaClient, ...args: any[]): any;
}