import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [buttonText, setButtonText] = useState('START');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setButtonText('RESTART');
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(25 * 60);
      setButtonText('START');
    } else {
      setIsRunning(!isRunning);
      setButtonText(isRunning ? 'START' : 'PAUSE');
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  const progress = 1 - timeLeft / (25 * 60);

  return (
    <div className="flex items-center justify-center my-11">
      <div className="relative w-96 h-96">
        <div className="absolute w-full h-full rounded-full shadow-2xl">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-[#F87070] stroke-current "
              strokeWidth="4"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="48"
              fill="transparent"
              strokeDasharray={`${progress * 301} 301`}
              transform="rotate(-90 50 50)"
            />
          </svg>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <span className="text-6xl font-bold text-[#D7E0FF]">
            {formatTime(timeLeft)}
          </span>
          <button
            className="mt-4 px-4 py-2 text-[#D7E0FF] hover:text-[#F87070] rounded focus:outline-none uppercase text-m tracking-widest"
            onClick={toggleTimer}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
