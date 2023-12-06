import { Show, createSignal } from "solid-js";
import BarProgress from "./components/barProgress";
import { timeFormat, timeToSeconds } from "./utils/";
import { ICountStates } from "./types";

function App() {
  const [count, setCount] = createSignal<string>("");

  const [countStates, setCountStates] = createSignal<ICountStates>({
    ready: false,
    running: false,
    progress: 0,
    count: 0,
    initialCount: 0,
  });
  const validar = () => {
    if (count().length >= 6) return true;
  };
  const countDown = () => {
    const timer = setInterval(() => {
      if (countStates().count === 0) {
        setCountStates({ ...countStates(), running: false, count: 0 });
        clearInterval(timer);
      }
      if (countStates().running === false) {
        clearInterval(timer);
        setCountStates({ ...countStates(), running: false });
      } else {
        setCountStates({
          ...countStates(),
          count: countStates().count - 1,
        });
      }
    }, 1000);
  };

  return (
    <>
      <section class=" grid place-content-center h-screen">
        <Show when={countStates().running && countStates().ready}>
          <BarProgress {...countStates()} />
        </Show>
        <div class="flex flex-col bg-zinc-500 rounded-3xl p-12 mb-4">
          <Show
            when={!countStates().ready}
            fallback={
              <p class="text-8xl text-white mx-auto">
                {timeFormat(countStates().count)}
              </p>
            }
          >
            <p class="text-8xl text-white mx-auto">{timeFormat(count())}</p>
          </Show>
        </div>
        <Show
          when={!countStates().ready && !countStates().running}
          fallback={
            <div class="flex flex-wrap gap-2 justify-center items-center ">
              <Show
                when={!countStates().running}
                fallback={
                  <button
                    onClick={() =>
                      setCountStates({
                        ...countStates(),
                        running: !countStates().running,
                      })
                    }
                  >
                    Pause
                  </button>
                }
              >
                <button
                  onClick={() => {
                    setCountStates({ ...countStates(), running: true });
                    countDown();
                  }}
                >
                  {countStates().initialCount !== countStates().count
                    ? "Resume"
                    : "Start"}
                </button>
              </Show>

              <button
                onClick={() =>
                  setCountStates({
                    ...countStates(),
                    count: countStates().initialCount,
                  })
                }
              >
                Clear
              </button>
              <button
                onClick={() => {
                  setCountStates({
                    ...countStates(),
                    running: false,
                    ready: false,
                    count: 0,
                    initialCount: 0,
                  });
                  setCount("");
                }}
              >
                New CountDown
              </button>
            </div>
          }
        >
          <div class="flex gap-2">
            <div class="flex flex-wrap gap-2 ">
              <button
                onClick={() => {
                  validar() ? "" : setCount(count() + "1");
                }}
              >
                1
              </button>
              <button
                onClick={() => (validar() ? "" : setCount(count() + "2"))}
              >
                2
              </button>
              <button
                onClick={() => (validar() ? "" : setCount(count() + "3"))}
              >
                3
              </button>
              <button
                onClick={() => (validar() ? "" : setCount(count() + "4"))}
              >
                4
              </button>
              <button
                onClick={() => (validar() ? "" : setCount(count() + "5"))}
              >
                5
              </button>
              <button
                onClick={() => (validar() ? "" : setCount(count() + "6"))}
              >
                6
              </button>
              <button
                onClick={() => (validar() ? "" : setCount(count() + "7"))}
              >
                7
              </button>
              <button
                onClick={() => (validar() ? "" : setCount(count() + "8"))}
              >
                8
              </button>
              <button
                onClick={() => (validar() ? "" : setCount(count() + "9"))}
              >
                9
              </button>
            </div>
            <div class="flex flex-wrap gap-2 ">
              <button
                onClick={() =>
                  setCountStates({
                    ...countStates(),
                    ready: true,
                    count: timeToSeconds(count()),
                    initialCount: timeToSeconds(count()),
                  })
                }
              >
                set
              </button>
              <button
                onClick={() => {
                  setCount("");
                }}
              >
                clean
              </button>
            </div>
          </div>
        </Show>
      </section>
    </>
  );
}

export default App;
