import { useState } from 'react'
import Sidebar from './Components/sidebar/Sidebar'
import Main from './Components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      <Main/>
    </>
  )
}


export default App
