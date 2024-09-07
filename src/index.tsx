import { createRoot } from 'react-dom/client';
import Selection from './components/selection';
import Timer from './components/timer';
import Settings from './components/settings';

import './index.css';

const App = () => {
  return (
    <div>
      <h1>pomodoro</h1>
      <Selection />
      <Timer />
      <Settings />
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
