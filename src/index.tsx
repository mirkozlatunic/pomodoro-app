import { createRoot } from 'react-dom/client';

const App = () => {
  return <h1>Hello</h1>;
};

const container = document.querySelector('#root');
const root = createRoot(container!);

root.render(<App />);
