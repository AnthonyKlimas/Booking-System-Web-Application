import './SelectTime.css'

import PageHeader from './PageHeader'

function SelectTime({setPage})
{
    return(
        <>
            <PageHeader title="Date & Time" setPage={setPage} />
        </>

    );

}

export default SelectTime