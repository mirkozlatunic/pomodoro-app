import React, { useState } from 'react';

type SettingsProps = {
  open: boolean;
  onClose: () => void;
};

const Settings: React.FC<SettingsProps> = ({ open, onClose }) => {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [font, setFont] = useState('sans');
  const [color, setColor] = useState('#f87070');

  const handleApply = () => {
    // Apply settings logic here
    onClose();
  };

  const getFontClass = (fontName: string) => {
    switch (fontName) {
      case 'kumbh-sans':
        return 'font-kumbh-sans';
      case 'roboto-slab':
        return 'font-roboto-slab';
      case 'space-mono':
        return 'font-space-mono';
      default:
        return 'font-kumbh-sans';
    }
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors  ${
        open ? 'visible bg-black/20' : 'invisible'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl shadow p-8 transition-all max-w-lg w-full ${
          open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6 ">
          <h2 className="text-2xl font-bold text-[#161932]">Settings</h2>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div className="mb-6 pb-2">
          <h3 className="uppercase text-sm font-bold text-[#161932] mb-4 tracking-wider">
            Time (Minutes)
          </h3>
          <div className="grid grid-cols-3 gap-4 pb-6 border-b">
            {[
              { label: 'pomodoro', value: pomodoro, setter: setPomodoro },
              {
                label: 'short break',
                value: shortBreak,
                setter: setShortBreak,
              },
              { label: 'long break', value: longBreak, setter: setLongBreak },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <label className="text-xs text-gray-400 mb-2 font-bold">
                  {item.label}
                </label>
                <input
                  type="number"
                  value={item.value}
                  onChange={(e) => item.setter(parseInt(e.target.value))}
                  className="w-full bg-gray-100 rounded-lg p-4 text-[#161932] font-bold text-sm"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 flex justify-between items-center border-b pb-5">
          <h3 className="uppercase text-sm font-bold text-[#161932]">Font</h3>
          <div className="flex space-x-4">
            {[
              { name: 'kumbh-sans', label: 'Aa' },
              { name: 'roboto-slab', label: 'Aa' },
              { name: 'space-mono', label: 'Aa' },
            ].map((f) => (
              <button
                key={f.name}
                onClick={() => setFont(f.name)}
                className={`w-10 h-10 rounded-full ${
                  font === f.name
                    ? 'bg-[#161932] text-white'
                    : 'bg-gray-100 text-[#161932]'
                } ${getFontClass(f.name)}`}
              >
                Aa
              </button>
            ))}
          </div>
        </div>

        <div className=" flex mb-8 justify-between items-center">
          <h3 className="uppercase text-sm font-bold text-[#161932]">Color</h3>
          <div className="flex space-x-4">
            {['#f87070', '#70F3F8', '#D881F8'].map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`w-10 h-10 rounded-full ${
                  color === c ? 'ring-2 ring-offset-2' : ''
                }`}
                style={{ backgroundColor: c }}
              >
                {color === c && (
                  <svg
                    className="w-6 h-6 mx-auto text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleApply}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#f87070] text-white rounded-full py-3 px-10 font-bold hover:bg-[#ff9b9b] transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
