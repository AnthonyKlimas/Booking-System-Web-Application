//Import css sheet for styling
import './PageHeader.css'

//Import calendar icon from lucide-react library
import { Calendar, ArrowLeft } from 'lucide-react';

function PageHeader({ title, setPage })
{
    return(
    <>
        {/* Create container for description at top of page */}
            <div className = "pageText">
                <div className = "pageTextParagraph">
                    <p>
                        If you don't see same-day availability when you discover Lice, please call{" "} 

                        <a href="tel:8433235366" className="phoneNumber">
                            843-323-5366
                        </a>

                        . We do everything we can to accommodate families the very day they reach out,
                        whenever our schedules allow.
                    </p>
                </div>

                {/* Create container for Select Appointment header so you can place calendar icon next to text*/}
                <div className = "appointmentHeader">
                    {/*Creates left header button with arrow icon*/}
                    <div className="headerLeft">
                        {
                            title === "Date & Time" &&
                            (
                                <>
                                    <div className= "backButtonContainer">
                                        <ArrowLeft className= "arrowIcon" size={18} />
                                        <button className = "selectappointmentBack" onClick={() => setPage("appointments")}>
                                        Select Appointment
                                        </button>
                                    </div>
                                </>
                            )
                        }
                    </div>

                    {/* Places middle header on screen with calendar icon and text*/}
                    <div className= "pageTitle">

                        <Calendar size={18} />
                        <h3 className = "pageHeader"> {title} </h3>

                    </div>
                    {/*Places invisible right header container to center headers properly*/}
                    <div className="headerRight">
                    </div>

                </div>

            </div>
    </>
);
}

export default PageHeader