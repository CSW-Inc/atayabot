import { Client, Collection, Partials } from "discord.js";
import LogBuilder from "../utils/LogBuilder";
import Command from "./Command";

export default class AtayaClient extends Client {
    public declare token: string;
    public commands: Collection<string, Command>;

    constructor(token: string) {
        super({
            partials: [Partials.GuildMember, Partials.Message, Partials.User, Partials.Channel, Partials.Reaction],
            intents: 3243773
        });
        this.token = token;
    }

    public initialize() {
        this.login(this.token)
            .then(() => {
                new LogBuilder()
                    .setMessage('AtayaBot est bien connecté!')
                    .setType('info')
                    .setService('system')
                    .setShowDate(true)
                    .log();    
            })
            .catch(() => {
                new LogBuilder()
                    .setMessage('Une erreur est survenue lors du démarrage de AtayaBot')
                    .setType('error')
                    .setService('system')
                    .setShowDate(true)
                    .log();
            });
    }
}