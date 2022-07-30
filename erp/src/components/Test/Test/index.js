import React, {useState} from "react"
import {PlusIcon, XCircleIcon} from "@heroicons/react/solid"

function AnswerBox(props)
{
    const [state,setState] = React.useState(false)
    const [number,setNumber] = React.useState(1)
    return(
        <div className="">
            <div className={state ? "absolute flex flex-col z-1 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-xl shadow opacity-[0.97] p-5 text-3xl h-auto w-full" : "absolute scale-0 opacity-0 h-0 w-0"}>
                <div className="flex flex-row">
                    <XCircleIcon className="left-0 top-0 absolute h-10 w-10 cursor-pointer" onClick={() => setState(false)}/>
                    &nbsp;&nbsp;<h1 className="m-auto mb-5"> <span className="text-3xl px-2 bg-gradient-to-br from-indigo-700 to-blue-600 rounded ">AnswerBox</span> for Question {props.num}&nbsp;&nbsp;</h1>
                    <PlusIcon className="right-[0.3rem] absolute top-[0.2rem] h-8 w-8 cursor-pointer bg-white text-black rounded-full"/>
                </div>                        
                <div className="flex items-center align-middle">
                    {
                        [...Array(number)].map((e,i) =><span className="p-3 flex items-center align-middle"><input type="checkbox" className="h-8 w-8 accent-green-500 bg-green-800"/><span></span><input className="h-8 w-[80%]"/></span>)
                    }
                </div>
            </div>
            <form className=''>
                <div className="flex flex-row items-center">
                    <h1 className="p-2 text-xl border-r-0 h-12 border-2 border-black">Q{props.num}</h1>
                    <textarea onFocus={() => setState(true)} className="border-2 border-black h-12 w-96"/>
                </div>
            </form>
        </div>
    )
}

export default AnswerBox;