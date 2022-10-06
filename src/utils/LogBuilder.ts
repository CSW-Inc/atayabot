import { AtayaLoggerData, AtayaLoggerDataService, AtayaLoggerDataType } from "../../types/Utils";
import moment from 'moment';
import colors from 'colors';

export default class LogBuilder {
    private data: AtayaLoggerData;

    constructor(data?: AtayaLoggerData) {
        this.data = Object.assign({
            message: undefined,
            service: 'system',
            type: 'info',
            showDate: false
        }, data);
    }

    /**
     * -----------------------------
     * Define message value
     * -----------------------------
     * 
     * @param message {string} represent the message which will be logged
     * @returns 
     */
    public setMessage(message: string): this {
        this.data.message = message;
        return this;
    }

    /**
     * -----------------------------
     * Define type value
     * -----------------------------
     * 
     * @param type {AtayaLoggerDataType} represent the type of log
     * @returns 
     */
    public setType(type: AtayaLoggerDataType): this {
        this.data.type = type;
        return this;
    }

    /**
     * -----------------------------
     * Define service value
     * -----------------------------
     * 
     * @param service {AtayaLoggerDataService} represent the service which is logging
     * @returns 
     */
    public setService(service: AtayaLoggerDataService): this {
        this.data.service = service;
        return this;
    }

    /**
     * -----------------------------
     * Define showDate value
     * -----------------------------
     * 
     * @param showDate {boolean} represent if date will be describe in the log
     * @returns 
     */
    public setShowDate(showDate: boolean): this {
        this.data.showDate = showDate;
        return this;
    }

    /**
     * -----------------------------
     * Format the message
     * 
     * @returns 
     */
    private formatMessage() {
        let verificationArr: string[] = [];

        // Log type veriication

        let type = this.data.type.toUpperCase();
        switch(this.data.type) {
            case 'error':
                verificationArr.push(`[${colors.red(type)}]`);
                break;
            case 'info':
                verificationArr.push(`[${colors.blue(type)}]`);
                break;
            case 'success':
                verificationArr.push(`[${colors.green(type)}]`);
                break;
            case 'warning':
                verificationArr.push(`[${colors.yellow(type)}]`);
                break;
        }
        
        if (this.data.service) verificationArr.push(`[${this.data.service.toUpperCase()}]`);
        if (this.data.showDate) verificationArr.push(`[${moment(Date.now()).format('hh:mm:ss')}]`);
        if (this.data.message) verificationArr.push(`- ${this.data.message}`);

        return verificationArr.join(' ');
    }

    /*
     * -----------------------------
     * Log the message
     * -----------------------------
     */
    public log() {
        console.log(this.formatMessage());
    }
}