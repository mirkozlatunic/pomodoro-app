import { createRoot } from 'react-dom/client';
import Selection from './components/selection';
import Timer from './components/timer';
import Settings from './components/settings';

import './index.css';
import { FaCog } from 'react-icons/fa';
import { useState } from 'react';

const App = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-page text-font font-kumbh-sans">
      <div className="py-12 flex flex-col  items-center">
        <h1 className="font-bold md:text-3xl text-2xl mb-10 md:mb-13">
          pomodoro
        </h1>
        <Timer />
        <button>
          <FaCog className="text-2xl" onClick={() => setOpen(true)} />
        </button>
        <Settings open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('Root element not found');
}
