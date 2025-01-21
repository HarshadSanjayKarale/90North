import { useState } from 'react'
import ResponsiveLayout from './ResponsiveLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <ResponsiveLayout/>
    </>
  )
}

export default App
