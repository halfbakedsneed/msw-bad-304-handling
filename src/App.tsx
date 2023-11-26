import React from "react";

import logo from "./logo.svg";
import "./App.css";

import { setupWorker } from "msw/browser";

const worker = setupWorker();
worker.start(); // Promise<{ pending }>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => fetch("http://localhost:3001/trigger")}>
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
