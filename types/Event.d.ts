export type EventOptions = {
    once: boolean;
    category: EventCategory;
}

export type EventCategory = 'general' | 'client' | 'guild' | 'reaction';