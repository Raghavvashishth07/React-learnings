import { useState } from 'react'

function App() {
  const [color, setColor] = useState('#2a2d34') //gunmetal grey

  return (
    <div
      className="w-full h-screen duration-300 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-4">
        <div className="flex gap-4 bg-white shadow-xl px-6 py-4 rounded-full backdrop-blur-md border border-gray-200">
          <button
            className="px-5 py-2 rounded-full text-white shadow-md hover:scale-105 transition"
            style={{ backgroundColor: '#ef4444' }} // red
            onClick={() => setColor('#ef4444')}
          >
            Red
          </button>
          <button
            className="px-5 py-2 rounded-full text-white shadow-md hover:scale-105 transition"
            style={{ backgroundColor: '#10b981' }} // green
            onClick={() => setColor('#10b981')}
          >
            Green
          </button>
          <button
            className="px-5 py-2 rounded-full text-white shadow-md hover:scale-105 transition"
            style={{ backgroundColor: '#3b82f6' }} // blue
            onClick={() => setColor('#3b82f6')}
          >
            Blue
          </button>
          <button
            className="px-5 py-2 rounded-full text-white shadow-md hover:scale-105 transition"
            style={{ backgroundColor: '#facc15' }} // yellow
            onClick={() => setColor('#facc15')}
          >
            Yellow
          </button>
          <button
            className="px-5 py-2 rounded-full text-white shadow-md hover:scale-105 transition"
            style={{ backgroundColor: '#8b5cf6' }} // purple
            onClick={() => setColor('#8b5cf6')}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
