import './SelectTime.css'

import PageHeader from './PageHeader'

import { X } from 'lucide-react'

import {useState} from 'react'

function SelectTime({setPage, selectedAppointment})
{
    const dates = [];
    const [startIndex, setStartIndex] = useState(0);

    for(let i = 0; i < 30; i++)
    {
        const date = new Date();

        date.setDate(date.getDate() + i);

        if(date.getDay() !== 0)
        {
        dates.push(date);
        }
    }

function getDateLabel(date)
{
    const today = new Date();

    const daysAway =
        Math.floor(
            (date - today) /
            (1000 * 60 * 60 * 24)
        );

    if(daysAway === 0)
    {
        return "TODAY";
    }

    if(daysAway === 1)
    {
        return "TOMORROW";
    }

    const weekNumber =
        Math.floor(daysAway / 7);

    return weekNumber === 0
        ? "THIS WEEK"
        : weekNumber === 1
            ? "NEXT WEEK"
            : `IN ${weekNumber} WEEKS`;
}

    const visibleDates = dates.slice(startIndex, startIndex + 5);

    return(
        <>
            <PageHeader title="Date & Time" setPage={setPage} />

            <div className="appointmentHeaderv2">
                <p>APPOINTMENT</p>
            </div>

                <div className= "selectedappointmentcardContainer">

                    <div className = "selectedappointmentCard" key= {selectedAppointment.id}>

                        {/*Creates container that holds title, duration, price and description*/}
                        <div className = "selectedappointmentcardText">

                            {/*Place title on screen*/}
                            <h3>{ selectedAppointment.title } with Mount Pleasent</h3>

                            {/*Place duration and price on screen*/}
                            <p>
                                {/*If undefined render nothing, if defined price write price*/}
                                {selectedAppointment.duration}   
                                {
                                selectedAppointment.price &&
                            
                                   ` @ $${selectedAppointment.price}`
                                }
                            </p>

                            {/*Let program know we are writing in JavaScript again*/}
                            {
                                //If undefined react renders nothing, if defined description write description (example: true && "Hello" = Hello)
                                selectedAppointment.description &&
                                (
                                    <p>
                                        {selectedAppointment.description}
                                    </p>
                                )
                            }
                        </div>
                        
                        {/*Create book button in container (OnClick changes setPage useState to time)*/}
                        <button className = "selectedbackButton" onClick= {() => setPage("appointments")}>
                            <X size={22} />
                        </button>

                    
                    </div>
                </div>

            <div className= "bookingtimesContainer">
                <div className= "timezoneContainer">
                    <p className="timeZone">TIME ZONE: EASTERN TIME (GMT-04:00)</p>
                </div>
                        <div className= "dateHeader">
                            {
                                visibleDates.map((date, index) => 
                                (
                                    <div className="dateRow" key={index} >

                                        <p className="dateLabel">
                                            {getDateLabel(date)}
                                        </p>

                                        <h3 className= "dateWeekday">
                                            {
                                                date.toLocaleDateString(
                                                    "en-US",
                                                    { weekday: "long"}

                                                )
                                            }
                                        </h3>
                                        <p className= "dateNumber">
                                            {
                                                date.toLocaleDateString(
                                                    "en-US",
                                                    {
                                                        month: "short",
                                                        day: "numeric"

                                                    }
                                                )
                                            }
                                        </p>

                                    </div>
                                ))
                            }
                        </div>
                <div className= "bookingTimes">
                        
                </div>    

            </div>
        </>

    );

}

export default SelectTime