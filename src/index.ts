import AtayaClient from "./structure/AtayaClient";
import CommandHandler from "./structure/CommandHandler";

const client = new AtayaClient(process.env.TOKEN_APP);
const commandHandler = new CommandHandler(__dirname + '/commands/', client);

client.initialize();
commandHandler.run();