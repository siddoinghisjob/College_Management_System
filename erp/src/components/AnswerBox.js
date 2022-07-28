import React, { useState } from "react";
import { XCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useStore } from "./store/warehouse.js";
import CheckBox from "./store/checkbox.js";
import { useQNa } from "./store/ware.js"

function AnswerBox(props) {
  // updating functions
  const addCheckbox = useStore((state) => state.addCheckbox);
  // values of the variables
  const qN = useQNa((state) => state.nOq)
  const updateqN = useQNa((state) => state.decNoq)

  const [state,setState] = React.useState({
    box:false,
  })

  const number = useStore((state) => state.number);
  const upQuesNum = useStore((state) => state.updateQuesNum)
  
  function Box(e) {
    setState({
      box:true,
    }) 
  }

  function Generate(e) {
    addCheckbox(<CheckBox/>);
  }

  function Remove(e) {
    setState({
      box:false,
    }) 
  }

  function close()
   {
    let tmp = qN.findIndex((data) => data.id === props.title)
    const newArr = [...qN]
    newArr.splice(tmp,1)
    updateqN(newArr)
    upQuesNum(newArr.length+1)
  }

  return (
    <div>
      <form className="Test m-auto mt-5">
        <div className="relative">
          <div className="flex flex-row relative">
            <label className="p-2 border-2 h-10 flex flex-auto items-center">Q{props.title}</label>
            <textarea className="border-2 w-full h-10 border-l-0 placeholder:text-center" q={props.title} onFocus={Box} placeholder="Enter Question"/>
            <XCircleIcon onClick={close} className={(parseInt(qN.length + 1) === parseInt(props.title) && parseInt(props.title) !== 1) ? "w-10 h-10 border-2 border-collapse cursor-pointer rounded-r-lg text-white bg-red-500 hover:text-red-800" : "absolute scale-0 h-0 w-0"}/>
          </div>
          <div id={"c"+props.title} className={state.box ? "checkans w-64" : "absolute h-0 scale-0"}>
            <div>
              <XCircleIcon
                className="absolute bottom-0 left-0 h-7 w-7 cursor-pointer text-red-500 hover:text-red-800"
                onClick={Remove}
                Style="cursor:pointer;"
              />
            </div>
            <div className="absolute top-0 right-1 left-1">
              Tick the correct option(s) for Q{props.title}
            </div>
            <div>
              <CheckCircleIcon
                className="absolute bottom-0 right-0 cursor-pointer h-7 w-7 text-green-600 hover:text-green-900"
                onClick={Remove}
              />
            </div>
            <div className="m-auto border-1 border-black p-3 py-0 relative w-auto my-14">
              <div className="flex flex-row items-center border-2 border-gray-300 p-1">
                <input type="checkbox" />&nbsp;
                <textarea className="w-28 border-1 border-black" placeholder="Type Answer"/>
                <PlusCircleIcon className="h-4 w-4 invisible" />
              </div>
              {number}
            </div>
            <PlusCircleIcon
              onClick={Generate}
              className="cursor-pointer h-7 w-7 text-gray-600 hover:text-gray-900"
            />
          </div>
        </div> 
      </form>
    </div>
  );
}

export default AnswerBox;