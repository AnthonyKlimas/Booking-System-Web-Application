import { useState } from 'react'
import Appointments from './components/SelectAppointment'
import SelectTime from './components/SelectTime'
import CustomerInformation from './components/CustomerInformation'

function App() {
  const [page, setPage] = useState("appointments")
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  return (
      <>
      {
        page === "appointments" &&
        <Appointments setPage = {setPage} setSelectedAppointment = {setSelectedAppointment}/>

      }
      {
        page === "time" &&
        <SelectTime setPage = {setPage} selectedAppointment = {selectedAppointment}/>
      }
      {
        page === "information" &&
        <CustomerInformation setPage = {setPage}/>
      }
      </>
  )
}

export default App
