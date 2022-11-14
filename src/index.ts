import AtayaClient from "./structure/AtayaClient";
import CommandHandler from "./structure/CommandHandler";
import Database from "./structure/Database";
import EventHandler from "./structure/EventHandler";

const client = new AtayaClient(process.env.TOKEN_APP);
const commandHandler = new CommandHandler(__dirname + '/commands/', client);
const eventHandler = new EventHandler(__dirname + '/events/', client);
const database = new Database(process.env.DATABASE_HOST, process.env.DATABASE_NAME);

client.initialize();
eventHandler.run();
commandHandler.run();
database.run();