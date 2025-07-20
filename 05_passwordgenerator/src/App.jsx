import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numallowed, setnumallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState('')
  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numallowed) str += "0123456789"
    if (charallowed) str += "!=-_{}[]/?|.<,>:;@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length, numallowed, charallowed])

  useEffect(() => {
    passwordgenerator()
  }, [length, numallowed, charallowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 py-4 my-10 shadow-md text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black'>
        <h1 className='text-center mb-4 text-white text-3xl font-semibold'>🔐 Password Generator</h1>
        
        <div className='flex shadow-lg overflow-hidden mb-6 rounded-full'>
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className='outline-none w-full py-2 px-4 text-black text-xl'
            readOnly
          />
          <button
            onClick={() => {
              window.navigator.clipboard.writeText(password)
              passwordRef.current?.select()
              alert('password copied to clipboard')
            }}
            className='bg-blue-700 px-4 text-white hover:bg-blue-600'
          >Copy</button>
        </div>

        <div className='flex flex-col gap-y-4 text-white text-lg'>
          <div className='flex items-center justify-between'>
            <label>Length: {length}</label>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer w-2/3'
              onChange={(e) => setlength(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="numberInput">Include Numbers</label>
            <input
              type="checkbox"
              id='numberInput'
              checked={numallowed}
              onChange={() => setnumallowed(prev => !prev)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="characterInput">Include Symbols</label>
            <input
              type="checkbox"
              id='characterInput'
              checked={charallowed}
              onChange={() => setcharallowed(prev => !prev)}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
