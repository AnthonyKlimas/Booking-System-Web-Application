import { useState } from 'react'
import Appointments from './components/SelectAppointment'
import SelectTime from './components/SelectTime'

function App() {
  const [page, setPage] = useState("appointments")

  return (
      <>
      {
        page === "appointments" &&
        <Appointments setPage = {setPage} />

      }
      {
        page === "time" &&
        <SelectTime setPage ={setPage}/>
      }
      </>
  )
}

export default App
