//Import css styling sheet for styling
import './SelectTime.css'

//Import PageHeader function from PageHeader.jsx
import PageHeader from './PageHeader'

//Import specific icons form lucide react library
import { X, ChevronRight, ChevronLeft } from 'lucide-react'

//Import useState function from react library
import {useState} from 'react'

//SelectTime function that has setPage and selectedAppointment as parameters
function SelectTime({setPage, selectedAppointment})
{
    //Create an array named dates
    const dates = [];

    //Create a useState variable that holds the startingIndex of the dates array
    const [startIndex, setStartIndex] = useState(0);

    //Inserts 30 days into the dates array
    for(let i = 0; i < 30; i++)
    {
        //Creates an object named date that is initalized to todays date
        const date = new Date();

        //Add i ammount of days to todays date
        date.setDate(date.getDate() + i);

        //If date is not Sunday push to dates array
        if(date.getDay() !== 0)
        {
        dates.push(date);
        }
    }

    //Function to calculate the date Label at the top of dateNavigation bar that passes the date object as a parameter
    function getDateLabel(date)
    {
        //Create an object named today that is initalized to todays date
        const today = new Date();

        //Calculate how many days away todays date is from selected date and stores it in daysAway variable (uses milliseconds conversion for subtracting date objects)
        //Math.floor returns whole number
        const daysAway = Math.floor((date - today) / (1000 * 60 * 60 * 24));

        //Calculates what label the function should return
        if(daysAway === 0)
        {
            return "TODAY";
        }

        if(daysAway === 1)
        {
            return "TOMORROW";
        }

        //If not returned yet creates a variable that holds what week number the selected date is
        const weekNumber = Math.floor(daysAway / 7);

        //Calculates what label the function should return depending on the weekNumber
        return weekNumber === 0
            ? "THIS WEEK"
            : weekNumber === 1
                ? "NEXT WEEK"
                : `IN ${weekNumber} WEEKS`;
    }

    //Creates visibleDates variable that holds a subarray of the dates array to display
    const visibleDates = dates.slice(startIndex, startIndex + 5);

    const [selectedTime, setSelectedTime] = useState(null);

    const times =
    [
        "8:00 AM",
        "8:15 AM",
        "8:30 AM",
        "8:45 AM",
        "9:00 AM",
        "9:15 AM",
        "9:30 AM",
        "9:45 AM",
        "10:00 AM",
        "10:15 AM",
        "10:30 AM"
    ];

    //What the SelectTime function will return onto the screen
    return(
        <>
            {/*Calls PageHeader function in the PageHeader.jsx file and passes title and setPage as parameters*/}
            <PageHeader title="Date & Time" setPage={setPage} />

            {/*Creates another smaller header text above selected appointment*/}
            <div className="appointmentHeaderv2">

                <p>APPOINTMENT</p>

            </div>
                {/*Creates container that holds selected appointment card*/}
                <div className= "selectedappointmentcardContainer">

                    {/*Creates a container that creates the selected appointment card component*/}
                    <div className = "selectedappointmentCard" >

                        {/*Creates container that holds title, duration, price and description*/}
                        <div className = "selectedappointmentcardText">

                            {/*Place title on screen*/}
                            <h3>{ selectedAppointment.title } with Mount Pleasent</h3>

                            {/*Place duration and price on screen*/}
                            <p>
                                {selectedAppointment.duration}
                                {/*Let program know we are writing in JavaScript again*/}  
                                {
                                //If undefined render nothing, if defined price write price
                                selectedAppointment.price &&
                    
                                   ` @ $${selectedAppointment.price}`
                                }
                            </p>

                            {/*Let program know we are writing in JavaScript again*/}
                            {
                                //If undefined react renders nothing, if defined description write description (example: true && "Hello" = Hello)
                                selectedAppointment.description &&
                                (
                                    <p>{selectedAppointment.description}</p>
                                )
                            }

                        </div>
                        
                        {/*Create exit button for card (OnClick changes setPage useState to appointments)*/}
                        <button className = "selectedbackButton" onClick= {() => setPage("appointments")}>

                            {/*Add X icon for button display*/}
                            <X size={22} />

                        </button>

                    </div>
                </div>
            {/*Create container that holds all components for booking*/}
            <div className= "bookingtimesContainer">
                {/*Container that holds timezone text*/}
                <div className= "timezoneContainer">

                    <p className="timeZone">TIME ZONE: EASTERN TIME (GMT-04:00)</p>

                </div>
                {/*Create container that holds navigation bar for dates*/}
                <div className= "dateNavigation">
                    
                    {/*Creates left arrow button to navigate through dates*/}
                    <button className= "moveDatesLeft" onClick= {() =>
                        {
                            //What makes navigation work properly
                            //Changes useState startIndex to rerender components for navigation
                            if(startIndex - 5 >= 0)
                            {
                                setStartIndex(startIndex - 5);
                            }
                        }}
                        //If navigation cant go left any further then make arrow button hidden
                        style={{visibility: startIndex === 0
                            ? "hidden"
                            : "visible"
                        }}
                    >               
                        {/*Add ChevronLeft icon for button display*/}
                        <ChevronLeft size={22}/>
                    </button>
                        <div className= "calendarContent">
                            {/*Changes class name depending on how many elements are located in the visibleDates array*/}
                            <div className= {visibleDates.length < 5 ? "dateHeaderCenter" : "dateHeader"}>
                                {/*Let program know we are writing in JavaScript again*/}
                                {   
                                    //Uses the map JavaScript built in function for arrays to iterate through visibleDates array
                                    visibleDates.map((date, index) => 
                                    (
                                        //Creates a container that holds the index key so React can identify each generated column
                                        <div className="dateRow" key={index} >

                                            {/*Calls getDateLabel function that takes selected date to generate a date label*/}
                                            <p className="dateLabel">
                                                {getDateLabel(date)}
                                            </p>

                                            {/*Uses toLocaleDateString function to return the weekday variable in the date object as a string*/}
                                            <h3 className= "dateWeekday">
                                                {
                                                    date.toLocaleDateString( "en-US",{ weekday: "long"})
                                                }
                                            </h3>

                                            {/*Uses toLocaleDateString function to return the month variable and day variable as a string*/}
                                            <p className= "dateNumber">
                                                {
                                                    date.toLocaleDateString("en-US",{ month: "short", day: "numeric" })
                                                }
                                            </p>

                                        </div>
                                    ))

                                }
                            </div>

                                <div className= "bookingTimes">
                    {
                        visibleDates.map((date, index) =>
                        (
                            <div className="bookingColumn" key={index}>
                                {
                                    times.map(time =>
                                    (
                                        <button className= "timeButton" key={time} onClick={() =>
                                        {
                                            setSelectedTime(time);
                                            setPage("information");
                                        }}
                                        >
                                            {time}
                                        </button>
                                    ))
                                }
                            </div>
                        ))
                    }
                    </div>

                        </div>
                    {/*Creates right arrow button to navigate through dates*/}
                    <button className= "moveDatesRight" onClick= {() =>
                        {
                            //What makes navigation work properly
                            //Changes useState startIndex to rerender components for navigation
                            if(startIndex + 5 < dates.length)
                            {
                                setStartIndex(startIndex + 5);
                            }
                        }}
                        //If navigation cant go left any further then make arrow button hidden
                        style={{visibility: startIndex + 5 >= dates.length
                            ? "hidden"
                            : "visible"
                        }}
                    >   
                        {/*Add ChevronRight icon for button display*/}
                        <ChevronRight size={22}/>
                    </button>

                </div>    
            
            </div>
        </>

    );

}

export default SelectTime