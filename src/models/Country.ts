import mongoose, { Schema } from "mongoose";
import { CountryModel } from "../../types/Country";

const countrySchema = new Schema({
    guildId: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    bank: {
        type: Number,
        default: 0,
        required: true
    },
    currency: {
        type: String,
        default: '€',
        required: true
    },
    model: {
        type: CountryModel,
        required: true
    }
});

export default mongoose.model('Country', countrySchema);