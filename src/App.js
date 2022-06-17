
import './App.css';
import { useState } from 'react';
import reactLogo from "./svg/react-logo.svg";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleOnMouseMove = (e) => {
    /* update mouse position */
    setPosition({x:e.clientX, y:e.clientY});
  };
 
  return (
    <header className="App-header" onMouseMove={handleOnMouseMove}>
      <img
        src={reactLogo}
        className="App-logo"
        alt="logo"
        style={{ position: "absolute" , left:position.x, top:position.y }}
       
      />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};
function App() {
  return (
    <div className="App">
       <MouseTracker />
    </div>
  );
}

export default App;
