import { AtSymbolIcon } from "@heroicons/react/outline";

function AllChat() {
  return (
    <div>
      <div className="shadow-2xl m-3 cursor-pointer border rounded border-slate-300 bg-white mt-10 p-3">
        <form className="flex flex-col">
          <div className="flex flex-row align-middle items-center w-[75vw]">
            <label className="h-10 w-10 border border-collapse">
              <AtSymbolIcon />
            </label>
            <input className="border-2 w-[75vw] h-10" />
          </div>
          <div className="mt-3 grid grid-flow-row gap-1">
            <textarea placeholder="Message" className="border hover:shadow-2xl hover:shadow-purple-500 focus:border-0 border-black placeholder:text-black hover:placeholder:text-black p-3 h-[24rem]"/>
            <button className="top-10 w-20 border rounded bg-indigo-700 hover:bg-indigo-900 text-white text-lg h-auto p-3">
              Send
            </button>
          </div>
        </form>
      </div>
      <button className="bottom-16 absolute w-20 hover:w-24 h-12 hover:h-14 hover:text-2xl transition-all duration-200 origin-right p-2 rounded-sm border border-3 border-purple-600 bg-purple-800 text-xl text-white right-1">History</button>
    </div>
  );
}

export default AllChat;