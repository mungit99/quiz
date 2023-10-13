
import './App.css'
import { useState } from 'react'
import First from './components/First'
import Second from './components/Second'
import './style.css'

function App() {
  const [slide, setSlide] = useState("first")

  const handleClick1 = () => {
    setSlide("second")
  }

  const handleClick2 = () => {
    setSlide("third")
  }

  const handleClick3 = () => {
    setSlide("first")
  }


  return(
    slide === "first" ? 
      <First onClick={handleClick1}/> :
      <Second slide={slide} onClick2={handleClick2} onClick3={handleClick3} />
  )

}

export default App
