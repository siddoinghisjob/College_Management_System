import {PlusIcon} from '@heroicons/react/solid'
import React, {useState} from 'react'

function AnswerBox()
{
    const [state,setState] = React.useState({
        popUp: true
    })

    return(
        <div className='relative'>
            
            <form className='z-[-1]'>
                <div className="flex flex-row items-center">
                    <h1 className="p-2 text-xl border-r-0 h-12 border-2 border-black">Q1</h1>
                    <textarea className="border-2 border-black h-12 w-96"/>
                    <PlusIcon className='h-12 w-auto bg-green-400 shadow-2xl hover:bg-green-700 rounded-full cursor-pointer ml-1 text-white'/>
                </div>
            </form>
        </div>
    )
}

export default AnswerBox;