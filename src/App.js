import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MouseTrackerReact from './components/MouseTrackerReact';
import MouseTrackerAngular from './components/MouseTrackerAngular';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/r"  element={<MouseTrackerReact />} />
          <Route path="/a"  element={<MouseTrackerAngular />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
