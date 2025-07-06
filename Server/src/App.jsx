import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <main className="p-8">
          <h1 className="text-4xl font-bold text-center text-indigo-700">Welcome to My Website</h1>
          {/* You can add your routes or page sections here */}
        </main>
      </div>
    </>
  )
}

export default App
