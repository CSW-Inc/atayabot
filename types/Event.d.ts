export type EventOptions = {
    once: boolean;
    category: EventCategory;
}

export type EventCategory = 'custom' | 'client' | 'guild' | 'reaction' | 'interaction';