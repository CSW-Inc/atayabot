import mongoose from 'mongoose';
import LogBuilder from '../utils/LogBuilder';

export default class Database {
    private host: string;
    private name: string;
    private port: number;

    constructor(host: string, name: string, port?: number) {
        this.host = host;
        this.name = name;
        this.port = port ?? 27017;
    }

    /**
     * -----------------------------
     * Connect to mongodb database
     * -----------------------------
     */
    public run() {
        mongoose.connect(`mongodb://${this.host}:${this.port}/${this.name}`, {
            autoIndex: true,
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4
        })
        .then(() => {
            new LogBuilder()
                .setType('success')
                .setMessage(`La connexion à la base de donnée est un succès.`)
                .setShowDate(true)
                .setService('database')
                .log();
        })
        .catch(() => {
            new LogBuilder()
                .setType('error')
                .setMessage('La connexion à la base de donnée est un échec.')
                .setShowDate(true)
                .setService('database')
                .log();
        });
    }
}