import AtayaClient from "./structure/AtayaClient";
import CommandHandler from "./structure/CommandHandler";
import EventHandler from "./structure/EventHandler";

const client = new AtayaClient(process.env.TOKEN_APP);
const commandHandler = new CommandHandler(__dirname + '/commands/', client);
const eventHandler = new EventHandler(__dirname + '/events/', client);

client.initialize();
eventHandler.run();
commandHandler.run();