export type AtayaLoggerData = {
    message: string;
    service: AtayaLoggerDataService;
    type: AtayaLoggerDataType;
    showDate: boolean;
}

export type AtayaLoggerDataType = 'error' | 'info' | 'success' | 'warning';

export type AtayaLoggerDataService = 'system' | 'database';