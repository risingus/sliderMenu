import { useState } from 'react'
import { Slider } from './components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Slider/>
    </div>
  )
}

export default App
