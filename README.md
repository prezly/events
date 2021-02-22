# @prezly/events

![Version](https://img.shields.io/npm/v/@prezly/events)
![License](https://img.shields.io/npm/l/@prezly/events)
![Build](https://github.com/prezly/events/workflows/Build/badge.svg)
![Prettier](https://github.com/prezly/events/workflows/Prettier/badge.svg)

Event emitter with [DOM-like `EventTarget` API](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) & strong TypeScript typings.

---

## Alternatives

There's this great [mitt](https://github.com/developit/mitt) package which implements `EventEmitter` interface from node.js but it does not have strong typings. [There's a PR pending](https://github.com/developit/mitt/pull/114) with this feature, but there's been no activity for 7 months. Perhaps in the future we might not want to maintain this `@prezly/events` package. But on the other hand, we should think twice before using a package where last PR got merged over half year ago.

## Example

Demo: https://codesandbox.io/s/prezlyevents-demo-2k7pd

```tsx
import Events from '@prezly/events';

const ref = { current: 0 };

const events = new Events<{
    add: number;
    substract: number;
    log: never; // "never" means that event has no payload
}>();

const add = (value: number) => {
    ref.current += value;
};

const substract = (value: number) => {
    ref.current -= value;
};

const log = () => {
    console.log(ref.current);
};

// Attach event handlers
events.addEventListener('add', add);
events.addEventListener('substract', substract);
const removeLogListener = events.addEventListener('log', log);

// Dispatch events
events.dispatchEvent('add', 2);
events.dispatchEvent('substract', 5);
events.dispatchEvent('log');

// Remove event handlers
events.removeEventListener('add', add);
events.removeEventListener('substract', substract);
removeLogListener(); // this is another way to unsubscribe event listener
```

---

Brought to you by [Prezly](https://www.prezly.com/?utm_source=github&utm_campaign=@prezly/events).
