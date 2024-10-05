import React, { useState, useEffect } from 'react';
import PomodoroSwitch from './selection';
import Settings from './settings';
import { FaCog } from 'react-icons/fa';

type TimerMode = 'pomodoro' | 'short break' | 'long break';

interface TimerSettings {
  pomodoro: number;
  'short break': number;
  'long break': number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [buttonText, setButtonText] = useState('START');
  const [mode, setMode] = useState<TimerMode>('pomodoro');
  const [settings, setSettings] = useState<TimerSettings>({
    pomodoro: 25,
    'short break': 5,
    'long break': 15,
  });
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeLeft(settings[mode] * 60);
    setIsRunning(false);
    setButtonText('START');
  }, [mode, settings]);

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
      setTimeLeft(settings[mode] * 60);
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

  const progress: number = 1 - timeLeft / (settings[mode] * 60);

  const handleSettingsChange = (newSettings: TimerSettings) => {
    setSettings(newSettings);
    setTimeLeft(newSettings[mode] * 60);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <PomodoroSwitch
        activeSection={mode}
        setActiveSection={
          setMode as React.Dispatch<React.SetStateAction<TimerMode>>
        }
      />

      <div className="flex items-center justify-center my-11 rounded-full bg-gradient-to-br from-bg_darkBlue to-bg_lightBlue w-[27rem] h-[27rem] drop-shadow-4xl">
        <div className="relative w-96 h-96 rounded-full">
          <div className="absolute w-full h-full rounded-full p-4 bg-[#161932]">
            <svg className="w-ful h-full" viewBox="0 0 100 100">
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
          <div className="absolute top-8 left-0 w-full h-full flex flex-col items-center justify-center">
            <span className="text-8xl font-bold text-[#D7E0FF]">
              {formatTime(timeLeft)}
            </span>
            <button
              className="mt-4 pl-4 py-2 text-[#D7E0FF] hover:text-[#F87070] rounded focus:outline-none uppercase text-m tracking-widest"
              onClick={toggleTimer}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsSettingsModalOpen(true)}
        className="px-4 py-2 text-white rounded hover:text-gray-100"
      >
        <FaCog className="text-2xl" onClick={() => setOpen(true)} />
      </button>

      <Settings
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        onApply={handleSettingsChange}
        currentSettings={settings}
      />
    </div>
  );
};

export default CountdownTimer;
