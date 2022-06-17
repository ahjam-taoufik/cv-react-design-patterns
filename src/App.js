import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MouseTrackerA from './components/MouseTrackerA';
import MouseTrackerB from './components/MouseTrackerB';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/react"  element={<MouseTrackerA />} />
          <Route path="/angular"  element={<MouseTrackerB />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
