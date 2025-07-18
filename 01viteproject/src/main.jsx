import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';

// import practise from "./practise";
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom function in main .jsx</h1>
    </div>
  )
}

const Newelement=(
  <a href="https://google.com" target="_blank">Click me to visit from new ele</a>
)


const Reactelement=React.createElement(
  'a',
  {href:"https://google.com",target:"_blank"},
  <br></br>,
  'click me to visit from reactelement'
);

createRoot(document.getElementById('root'))
.render(
  <StrictMode>,
    <App />
    <MyApp />
    {Newelement}
    {Reactelement}
  </StrictMode>,
)
