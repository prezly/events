import { Listener, RemoveListener } from './types';

export class Events<EventMap extends Record<string, unknown>> {
    private listeners: Partial<Record<keyof EventMap, Listener<any>[]>> = {};

    public dispatchEvent<Event extends keyof EventMap>(
        event: Event,
        ...rest: EventMap[Event] extends never ? [never?] : [EventMap[Event]]
    ): void {
        const payload = rest[0];
        this.getEventListeners(event).forEach((listener) => {
            setTimeout(() => listener(payload as any));
        });
    }

    public addEventListener<Event extends keyof EventMap>(
        event: Event,
        listener: Listener<EventMap[Event]>,
    ): RemoveListener {
        this.listeners[event] = [...this.getEventListeners(event), listener];
        const removeEventListener = () => this.removeEventListener(event, listener);
        return removeEventListener;
    }

    public removeEventListener<Event extends keyof EventMap>(
        event: Event,
        listener: Listener<EventMap[Event]>,
    ): void {
        this.listeners[event] = this.getEventListeners(event).filter(
            (callback) => callback !== listener,
        );
    }

    private getEventListeners<Event extends keyof EventMap>(
        event: Event,
    ): Listener<EventMap[Event]>[] {
        return (this.listeners[event] || []) as Listener<EventMap[Event]>[];
    }
}
