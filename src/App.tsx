
import './App.css'
import { memo } from 'react'
import First from './components/First'
import Second from './components/Second'
import './style.css'
import { useAppSelector } from './redux/store'

function App() {
  const slide = useAppSelector(state => state.slide.slide);

  return(
    slide === "first" ? 
      <First /> :
      <Second />
  )

}

export default memo(App)
