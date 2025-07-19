import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=15;
  let  [counter,SetCounter]=useState(0);

  const Addvalue = () => {
      //  console.log("added value",Math.random());
       console.log("clicked",counter);
       if(counter<20){
       
       SetCounter(counter+1)
       }
  }

  const removeValue=()=>{
    console.log("clicked remove button",counter);
    if(counter>0){
    SetCounter(counter-1);
    }
  }

  return (
    <>
    <h1>Harayanvi seekh ra hai react</h1>
    <h2>samajh gya laadle</h2>
    <h3>count:{counter}</h3>

    <button
    onClick={Addvalue}
    >Add value</button>
    <br />
    <button
    onClick={removeValue}
    >remove value</button>

    </>  
  )
}

export default App
