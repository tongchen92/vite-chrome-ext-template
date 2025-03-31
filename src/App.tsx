import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <div className="flex justify-center gap-8 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#61dafbaa]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-6">Vite + React</h1>
      <div className="p-8 mb-6 bg-gray-800 rounded-lg">
        <button
          className="px-4 py-2 mb-4 font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-gray-700 p-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
