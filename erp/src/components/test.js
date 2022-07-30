import React, { useState } from "react";
import { ArrowCircleLeftIcon, StarIcon } from "@heroicons/react/solid";
import AnswerBox from "./Test/Test";

function Test() {
  const [state, setState] = React.useState({
    show: true,
    title: "",
  });

  return (
    <div className="bg-white relative p-10 rounded flex flex-row items-center align-middle shadow-2xl">
      <div className="absolute text-4xl top-0 z-50 opacity-95 bg-blue-600 text-white rounded-lg shadow p-5 w-[150%]">
        <div className="flex flex-col">
          <div className="flex flex-row items-center m-auto">
            <StarIcon className="h-[5rem] w-[5rem] rounded-full mr-2 bg-blue-400 text-white rotate-[-12deg] shadow-2xl" />
            <h1 className="text-[4rem]">Tips</h1>
          </div>
          <div>
            <StarIcon className="h-10 w-10" />
            How to put a Text Answer?
          </div>
          <div className="bg-blue-400 rounded">
            Write the answer on the first option box and tick it.
          </div>
        </div>
      </div>
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
            : "flex flex-col items-center align-middle p-3"
        }
      >
        <ArrowCircleLeftIcon
          onClick={() => setState({ show: true, title: "" })}
          className="h-16 w-16 mb-4 top-[-1rem] hover:text-red-400 hover:bg-white rounded-full bg-red-400 shadow-2xl text-white cursor-pointer absolute left-[-1rem]"
        />
        <h1 className="heading mt-3">{state.title}</h1>
        <AnswerBox />
      </div>
    </div>
  );
}

export default Test;