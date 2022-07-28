import {
  PaperClipIcon,
  ArrowCircleRightIcon,
  UserIcon,
} from "@heroicons/react/solid";

function Chat() {
  return (
    <div className="mt-[-1rem] flex flex-row shadow-xl shadow-slate-400">
      <div className=" w-auto h-[80.5vh] border border-black bg-white p-5">
            <h1 className="text-3xl font-bold">Chats</h1>
            <span className="profile"><UserIcon className="profileicon"/> Soumya Deep Sarkar</span>
            <span className="profile"><UserIcon className="profileicon"/> Deep Sarkar</span>
            <span className="profile"><UserIcon className="profileicon"/> Diya Sarkar</span>
            <span className="profile"><UserIcon className="profileicon"/> Riya Sarkar</span>
      </div>
      <div className="h-[80.5vh] border border-black border-collapse">
      <div className="chats scroll">
          <span className="you">Hi</span>
          <span className="other">Heelo</span>
          <span className="you">hi helo</span>
          <span className="other">Good Night</span>
          <span className="you">Hi</span>
          <span className="other">Heelo</span>
          <span className="you">hi helo</span>
          <span className="other">Good Night</span>
          <span className="you">Hi</span>
          <span className="other">Heelo</span>
          <span className="you">hi helo</span>
          <span className="other">Good Night</span>
        </div>
        <div>
          <form className="flex flex-row">
            <span className="group">
              <p class="absolute bottom-[5rem] bg-black p-2 rounded mb-3 scale-0 group-hover:scale-100 transition-all duration-150 origin-bottom text-white">profile name</p>
              <UserIcon className="cursor-pointer border border-collapse  border-black w-12 h-10" />
            </span>
            <input className="w-full h-10 border border-r-0 border-black" />
            <PaperClipIcon className="cursor-pointer border border-collapse  border-black w-16 h-10" />
            <ArrowCircleRightIcon className="cursor-pointer border border-collapse  border-black  w-16 h-10" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;