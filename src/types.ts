export type Listener<Payload> = (payload: Payload) => void;

export type RemoveListener = () => void;
