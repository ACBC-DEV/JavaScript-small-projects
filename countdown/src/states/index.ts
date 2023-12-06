import { createMachine, assign } from "xstate";
import { countDown } from "../utils/index";
const timerMachine = createMachine({
  id: "timer",
  initial: "idle",
  context: {
    count: 0,
    initialCount: 0,
  },
  states: {
    idle: {
      on: {
        SET: {
          target: "ready",
          actions: assign({
            initialCount: ({ context }) => context.initialCount,
            count: ({ context }) => context.initialCount,
          }),
        },
      },
    },
    ready: {
      on: {
        START: {
          target: "running",
        },
      },
    },
    running: {
      invoke: {
        id: "countDown",
        src: ({ context, event }) => countDown(context, event),
      },
      on: {
        FINALIZE: "finalized",
        PAUSE: "paused",
      },
    },
    paused: {
      on: {
        RESUME: {
          target: "running",
          actions: assign({
            count: ({ context }) => context.count,
          }),
        },
      },
    },
    finalized: {
      on: {
        RESET: {
          target: "newCount",
          actions: assign({
            count: 0,
            initialCount: 0,
          }),
        },
        RESTART: {
          target: "running",
          actions: assign({
            count: ({ context }) => context.initialCount,
          }),
        },
      },
    },
    newCount: {
      on: {
        IDLE: {
          target: "idle",
          actions: assign({
            count: 0,
            initialCount: 0,
          }),
        },
      },
    },
  },
});

export default timerMachine;
