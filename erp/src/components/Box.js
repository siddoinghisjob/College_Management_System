import { BeakerIcon } from "@heroicons/react/solid";

function Boxes()
{
    return(
        <div className="grid sm:grid-cols-3 grid-1 content-start align-middle">
            <div className="box">
                <BeakerIcon className="subIcon"/>
                SP 2022 Sec-E Btech 1st SEM
            </div>
            <div className="box">
                <BeakerIcon className="subIcon"/>
                SP 2022 Sec-F Btech 2nd SEM
            </div>
            <div className="box">
                <BeakerIcon className="subIcon"/>
                SP 2022 Sec-G Btech 2nd SEM
            </div>
            <div className="box">
                <BeakerIcon className="subIcon"/>
                SP 2022 Sec-H Btech 3rd SEM
            </div>
            <div className="box">
                <BeakerIcon className="subIcon"/>
                SP 2022 Sec-H Btech 3rd SEM
            </div>
        </div>
    );
}

export default Boxes;