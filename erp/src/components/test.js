import React, { useState, useEffect } from "react";
import { StarIcon, XCircleIcon, PlusIcon} from "@heroicons/react/solid";
import {ArrowLeftIcon} from '@heroicons/react/outline'
import AnswerBox from "./Test/Test";

function Test() {
  const [state, setState] = React.useState({
    show: true,
    title: "",
    hide:false,
  });

  const [number,setNumber] = React.useState(1)

  return (
    <div className="bg-white relative p-10 flex flex-row items-center align-middle shadow-2xl rounded-2xl">
      <div
        className={
          state.show
            ? "flex flex-col items-center align-middle"
            : "absolute scale-0 opacity-0 h-0 w-0"
        }
      >
        <h1 className="heading">Schedule Tests</h1>
        <select
          onChange={(e) => setState({ show: false, title: e.target.value })}
          className="h-12 text-xl p-2 border-black border-2"
        >
          <option>Select Class</option>
          <option>Demo class A</option>
          <option>Demo class B</option>
          <option>Demo class C</option>
          <option>Demo class D</option>
        </select>
      </div>
      <div
        className={
          state.show
            ? "absolute scale-0 opacity-0 h-0 w-0"
            : "flex flex-col items-center align-middle p-3 relative"
        }
      >
        <div className={state.hide ? "absolute scale-0 h-0 w-0 opacity-0":"absolute transition-all duration-150 origin-bottom text-4xl left-[0rem] h-[110%] top-[-1rem] z-50 opacity-[.93] bg-blue-600 text-white rounded-lg shadow p-8"}>
          <div className="flex flex-col">
            <div className="flex flex-row items-center m-auto">
              <StarIcon className="h-[5rem] w-[5rem] rounded-full mr-2 bg-blue-400 text-yellow-400 rotate-[-12deg] shadow-2xl shadow-blue-800" />
              <h1 className="text-[4rem]">Tips</h1>
              <XCircleIcon onClick={() => setState({...state,hide:true})} className="h-[4rem] w-[4rem] rounded-full text-red-400 hover:scale-110 hover:text-red-500 transition-all duration-200 origin-center cursor-pointer absolute right-0 top-0"/>
            </div>
            <div className="flex flex-row mb-6 mt-6">
              <StarIcon className="h-12 w-12 rounded-full bg-blue-400 mr-2" />
              How to put a Text Answer?
            </div>
            <div className="bg-blue-400 rounded p-1 px-2">
              Write the answer on the first option box and tick it.
            </div>
          </div>
        </div>
        <ArrowLeftIcon
          onClick={() => setState({ show: true, title: "" })}
          className="h-12 w-12 mb-4 p-1 hover:bg-black top-0 bg-gray-800 text-white rounded-2xl shadow cursor-pointer absolute left-0"
        />
        <PlusIcon onClick={() => setNumber(number+1)} className="absolute h-12 w-12 top-0 hover:bg-black right-0 bg-gray-800 text-white rounded-2xl shadow cursor-pointer"/>
        <XCircleIcon onClick={() => setNumber(number-1)} className={number !== 1 ? "h-12 w-12 absolute cursor-pointer bottom-0 right-0 text-red-600 hover:text-red-800" : "absolute scale-0 w-0 h-0 opacity-0"} />

        <h1 className="heading mt-3">{state.title}</h1>
        <div className="overflow-y-scroll h-48 scroll">
          {
            [...Array(number)].map((e,i) => {
              return (
              <div className="flex flex-row items-center">
                <AnswerBox className="border-collapse" num ={i+1}/>
              </div>
              )
            })
          }
        </div>
        <button className="bg-indigo-600 text-white rounded-md shadow p-3 text-2xl mt-4 font-mono">Submit</button>
      </div>
    </div>
  );
}

export default Test;