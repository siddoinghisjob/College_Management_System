import {
  ChatIcon,
  ClockIcon,
  DocumentIcon,
  SpeakerphoneIcon
} from "@heroicons/react/outline"
import { useStore } from "./store/store.js"

function Sidebar() {
  const page = useStore((state) => state.page) 
  const pageUpdate = useStore((state) => state.changePage) 
  return (
    <div>
      <div
        id="toolbox"
        className="left-0 h-auto w-20 border-2 border-gray-400 shadow shadow-gray-400 bg-white text-white flex flex-col align-middle items-center">
        <div id="allchat" onClick={() => pageUpdate("allchat")} className={page === "allchat" ? "icon-clicked flex flex-row group" : "icon-side flex flex-row group"}>
          <SpeakerphoneIcon />
          <span className="tooltip group-hover:scale-100">
            Broadcast to all
          </span>
        </div>
        <div id="chat" onClick={() => pageUpdate("chat")} className={page === "chat" ? "icon-clicked flex flex-row group" : "icon-side flex flex-row group"}>
          <ChatIcon />
          <span className="tooltip group-hover:scale-100">Chats</span>
        </div>
        <div id="test" onClick={() => pageUpdate("test")} className={page === "test" ? "icon-clicked flex flex-row group" : "icon-side flex flex-row group"}>
          <DocumentIcon />
          <span className="tooltip group-hover:scale-100">
            Manage tests and quizzes
          </span>
        </div>
        <div id="schedule" onClick={() => pageUpdate("schedule")} className={page === "schedule" ? "icon-clicked flex flex-row group" : "icon-side flex flex-row group"}>
          <ClockIcon />
          <span className="tooltip group-hover:scale-100">
            Schedule Classes
          </span>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;