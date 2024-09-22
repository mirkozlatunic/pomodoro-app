import { createRoot } from 'react-dom/client';
import Selection from './components/selection';
import Timer from './components/timer';
import Settings from './components/settings';

import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-page text-font">
      <div className="py-12 flex flex-col  items-center">
        <h1 className="font-bold text-3xl sm:text-2xl mb-3">pomodoro</h1>
        <Selection />
        <Timer />
        <Settings />
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
