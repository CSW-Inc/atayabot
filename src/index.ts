import { ApplicationCommandResolvable } from "discord.js";
import AtayaClient from "./structure/AtayaClient";

const client = new AtayaClient(process.env.TOKEN_APP)
client.initialize();