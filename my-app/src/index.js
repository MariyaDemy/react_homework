import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './hm7/App7';
import App8 from './hm8/App8';
import App9 from './App9';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App1 /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    {/* <App4 /> */}
    {/* <App5></App5> */}
    {/* <App6></App6> */}
    {/* <App7></App7> */}
    {/* <App8></App8> */}
    <App9></App9>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
