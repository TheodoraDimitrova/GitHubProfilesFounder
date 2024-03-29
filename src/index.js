import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';

import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// ReactDOM.render(<App />, document.getElementById('root'));


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

    <Router>
      <App />
    </Router>

);