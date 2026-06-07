import './PageHeader.css'

import { Calendar } from 'lucide-react';

function PageHeader()
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
                <Calendar size={18} />
                <h3 className = "pageHeader">Select Appointment</h3>

            </div>
        </div>
    </>
    );
}

export default PageHeader