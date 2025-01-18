import React, { useEffect, useState } from "react";
import { updateLocalStorageInMilliseconds } from "./stats";

interface StartWorkingSessionProps {
  setUpdate: (update: boolean) => void;
}

const StartWorkingSession: React.FC<StartWorkingSessionProps> = ({
  setUpdate,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const convertTOHHMMSS = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const handleStop = () => {
    setIsRunning(false);
    updateLocalStorageInMilliseconds(new Date().toLocaleDateString(), time * 1000);
    setTime(0);
    setUpdate(true);
  };

  return (
    <div className="working-session">
      <div className="working-session-title">{convertTOHHMMSS(time)}</div>
      <div className="buttons">
        {isRunning ? (
          <button onClick={() => setIsRunning(false)}>Pause</button>
        ) : time > 0 ? (
          <button onClick={() => setIsRunning(true)}>Resume</button>
        ) : (
          <button onClick={() => setIsRunning(true)}>Start</button>
        )}
        {time > 0 && (
          <button onClick={handleStop} className="stop-button">
            Stop
          </button>
        )}
      </div>
    </div>
  );
};

export default StartWorkingSession;
