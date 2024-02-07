import { FC, useEffect, useState } from "react";

const Timer: FC = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <h1>Time: {time} seconds</h1>

      <div>
        <button
          onClick={() => {
            setRunning(true);
            console.log("start");
          }}
        >
          Start
        </button>

        <button
          onClick={() => {
            setRunning(false);
            console.log("stop");
          }}
        >
          Stop
        </button>

        <button
          onClick={() => {
            setTime(0);
            console.log("time setted");
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Timer;
