import React from 'react';
import './App.css';
// import Card from './Components/Card';
import Card from './Components/Card';


function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center py-10">
      <h1 className="bg-green-400 text-black font-semibold px-6 py-2 rounded-lg text-3xl mb-6">
        Tailwind test
      </h1>

      <Card username="System Bhai" btnText="Bhole ke Bhakt" />
      <Card username="Don Bhai" btnText="Area ka gunda" />
      <Card username="Tau Bhai" /> {/* Defaults to "Visit me" */}
    </div>
  );
}

export default App;
