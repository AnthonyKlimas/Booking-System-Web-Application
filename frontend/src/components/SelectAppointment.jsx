//Import css sheet over for styling
import './SelectAppointment.css'

//Import useState and useEffect classes from react library
import {useState, useEffect} from 'react';

//Import PageHeader function from PageHeader.jsx
import PageHeader from './PageHeader';

//Appointments function that has setPage variable and setSelectAppointment as parameters
function Appointments({setPage, setSelectedAppointment})
{
    //Create a useState of an array of variables that can set appointment types from database
    const [appointments, setAppointments] = useState([]);
    
    //fetches all rows in the table services from our database and puts it in the array setAppointments
    useEffect(() => 
    {
        fetch('http://localhost:3000/services')
        .then(response => response.json())
        .then(data => 
        {
            setAppointments(data);
        });

    }, []);
    
    //This is what will be returned by the SelectAppointments.jsx
    return(
    <>
        {/*Call Page Header component into program*/}
        <PageHeader title= "Select Appointment" setPage={setPage} />

            {/*Create container that holds the list of type of appointments that is created*/}
        <div className = "appointmentList">

            {/*Let program know we are writing in JavaScript again*/}
        {
            //Use map function for arrays to iterate through each object in the appointments array
            appointments.map(appointment =>
            (
                    //Create container that holds class and appointment id
                    <div className = "appointmentCard" key= {appointment.id}>

                        {/*Creates container that holds title, duration, price and description*/}
                        <div className = "appointmentcardText">

                            {/*Place title on screen*/}
                            <h3>{ appointment.title }</h3>

                            {/*Place duration and price on screen*/}
                            <p>
                                {/*If undefined render nothing, if defined price write price*/}
                                {appointment.duration}   
                                {
                                appointment.price &&
                            
                                   ` @ $${appointment.price}`
                                }
                            </p>

                            {/*Let program know we are writing in JavaScript again*/}
                            {
                                //If undefined react renders nothing, if defined description write description (example: true && "Hello" = Hello)
                                appointment.description &&
                                (
                                    <p>
                                        {appointment.description}
                                    </p>
                                )
                            }
                        </div>
                        
                        {/*Create book button in container (OnClick changes setPage useState to time)*/}
                        <button className = "bookButton" onClick= {() =>
                        { 
                            setPage("time"); 
                            setSelectedAppointment(appointment);
                        }}>
                            BOOK
                        </button>

                    
                    </div>
                ))
            }

        </div> 

    </>
    );
}

export default Appointments