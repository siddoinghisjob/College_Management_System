import { XCircleIcon } from "@heroicons/react/solid"

function CheckBox()
{
    return(
    <div>
        <span className="flex flex-row items-center">
            <input type="checkbox" />
            &nbsp; <input className="w-28 border-1 border-black" placeholder="Type Answer" />
            <XCircleIcon onClick={(e) => e.target.parentNode.parentNode.remove()} className="h-4 w-4 cursor-pointer hover:h-5 hover:w-5"/>
        </span>
    </div>
    );
}

export default CheckBox