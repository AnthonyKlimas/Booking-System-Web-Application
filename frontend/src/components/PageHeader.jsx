//Import css sheet for styling
import './PageHeader.css'

//Import calendar icon from lucide-react library
import { Calendar, ArrowLeft } from 'lucide-react';

function PageHeader({ title })
{
    return(
    <>
        {/* Create container for description at top of page */}
         <div className = "pageText">
            <p>
                If you don't see same-day availability when you discover Lice, please call{" "} 

                <a href="tel:8433235366" 
                className="phoneNumber">
                    843-323-5366
                </a>

                 . We do everything we can to accommodate families the very day they reach out,
                whenever our schedules allow.
            </p>

            {/* Create container for Select Appointment header so you can place calendar icon next to text*/}
            <div className = "appointmentHeader">
                {/* Place calendar icon on screen as element*/}
                <div className= "pageTitle">
                    <Calendar size={18} />
                    <h3 className = "pageHeader"> {title} </h3>
                </div>
            </div>

        </div>
    </>
    );
}

export default PageHeader