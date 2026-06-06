import { useState } from 'react'
import Appointments from './components/SelectAppointment'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Appointments />
      </>
  )
}

export default App
