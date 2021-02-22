export type Listener<Payload> = (...rest: Payload extends never ? [never?] : [Payload]) => void;

export type RemoveListener = () => void;
