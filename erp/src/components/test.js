import React from "react";
import { useStore } from "./store/warehouse.js"
import { useQNa } from "./store/ware.js"
import AnswerBox from "./AnswerBox.js"
import { PlusCircleIcon, StarIcon, XCircleIcon } from "@heroicons/react/solid"

function Test() {

  const updateClasses = useStore((state) => state.updateClasses)
  const classes = useStore((state) => state.classes)
  const qN = useQNa((state) => state.nOq)
  const updateqN = useQNa((state) => state.incNoq)
  const quesNum = useStore((state) => state.quesNum)
  const upQuesNum = useStore((state) => state.updateQuesNum)
  const updateBox = useStore((state) => state.updateBox)
  const Box = useStore((state)=>state.box)

  function update(e) {
    updateClasses(e.target.value)
    updateBox(!Box)
  }
 
  function up(){
    updateBox(!Box)
  }

  function addQ()
  {
    let c = quesNum+1
    upQuesNum(c)
    const objToStore ={
      value:<AnswerBox title={c}/>,
      id:c
    }
    updateqN(objToStore)
  }

  return (
    <div className="flex flex-col align-middle text-center items-center overflow-hidden">
      <div className = {Box === false ? "absolute scale-0 h-0 w-0" : "bg-blue-600 shadow-2xl text-white rounded-2xl p-3 z-[1] absolute pb-10 opacity-95 flex flex-col items-center align-middle"}>
        <div className="text-6xl flex flex-row items-center m-10 mt-6">
          Tips&nbsp;<StarIcon className="h-20 w-20 rounded-full bg-blue-500 rotate-[-16deg] shadow-2xl text-yellow-500"/>
          <XCircleIcon onClick={up} className="h-10 w-10 absolute right-2 top-2 cursor-pointer hover:text-red-300"/>
        </div>
        <div className="flex flex-row items-center text-4xl">
          <StarIcon className="h-12 w-12 rounded-full bg-blue-500 m-auto"/>&nbsp;What to do if it's TEXT ANSWER?
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className="text-4xl bg-blue-500 p-2 rounded-lg m-5">
          Fill the first answer box and tick it.
        </div>
      </div>
      <h1 className="text-[3rem] font-mono mb-0">Schedule Tests</h1>
      <div className="">
        <button className="absolute right-0 p-3 bg-purple-600 shadow text-white text-xl font-semibold font-sans hover:bg-purple-800">
          Scheduled Tests
        </button>
        <button onClick={up} className={Box === false ? "p-3 bg-blue-600 shadow text-white text-xl w-28 hover:w-32 transition-all duration-300 origin-right font-semibold font-sans hover:bg-blue-800" : "absolute scale-0 h-0 w-0"}>
          Tips Box
        </button>
      </div>
      <div className="border-2 text-center m-fit p-3 bg-white text-lg">
        <div className=" h-6">
          <form className={classes === "Select Class" ? "Form" : "scale-0 absolute h-0"}>
            <select onChange={update} className="cursor-pointer">
              <option>
                <b>Select Class</b>
              </option>
              <option>SP22 Btech SEC-E 1st Year</option>
              <option>SP22 Btech SEC-F 1st Year</option>
              <option>SP22 Btech SEC-E 2nd Year</option>
              <option>SP22 Btech SEC-G 2nd Year</option>
              <option>SP22 Btech SEC-K 2nd Year</option>
            </select>
          </form>
        </div>
        <div className={classes === "Select Class" ? "absolute scale-0 h-0" : "scroll relative overflow-y-scroll max-h-96 h-72 p-3 w-[40rem]"}>
          <div className="relative">
            <center className="text-4xl ml-16 m-10 mt-0 bg-blue-50 rounded-lg shadow border border-blue-600 py-2 w-[30rem]">{classes}</center>
            <div className="relative">
              <AnswerBox title="1"/>
              <PlusCircleIcon onClick={addQ} className="h-6 w-6 cursor-pointer top-0 right-0 absolute bg-black text-white hover:bg-white hover:text-black hover:shadow rounded-full"/>
              {
                qN.map((item) => (
                  <span>{item.value}</span>
                ))
              }
            </div>
            <button className="p-2 bottom-0 m-3 mb-0 hover:bg-cyan-700 bg-cyan-500 text-white rounded">
            Submit
        </button>
          </div>
        </div>
        
      </div>
      <b>{Box}</b>
    </div>
  );
}

export default Test;