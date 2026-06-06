//Import css sheet over for styling
import './SelectAppointment.css'
//Import calendar icon from lucide-react library
import { Calendar } from 'lucide-react';

//Import useState and useEffect classes from react library
import {useState, useEffect} from 'react';

function Appointments()
{
    //Create a useState of an array that variables that can set appointment types from database
    const [appointments, setAppointments] = useState([]);
    
    //fetches all rows in the table services from our databse and puts in in the array setAppointments
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
        {/* Create container for description at top of page */}
        <div className = "pageText">

            <p>
                If you don't see same-day availability when you discover Lice, please call{" "} 

                <span className="phoneNumber">
                    843-323-5366
                </span>

                 . We do everything we can to accommodate families the very day they reach out,
                whenever our schedules allow.
            </p>

            {/* Create container for Select Appointment header so you can place calendar icon next to text*/}
            <div className = "appointmentHeader">
                {/* Place calendar icon on screen as element*/}
                <Calendar size={18} />
                <h3 className = "pageHeader">Select Appointment</h3>

            </div>

        </div>

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
                        
                        {/*Create book button in container*/}
                        <button className = "bookButton">
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