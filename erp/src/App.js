import Sidebar from './components/sidebar';
import Header from './components/header.js';
import Box from "./components/Box.js";
import { useStore } from "./components/store/store.js"
import AllChat from './components/AllChat.js';
import Chat from './components/Chat.js';
import Test from './components/test.js';

function App() {

  const page = useStore((state) => state.page)
  let data
    if(page === "main")
    {
      data = <Box/>
    }
    else if(page === "allchat")
    {
      data = <AllChat/>
    }
    else if(page === "chat")
    {
      data = <Chat/>
    }
    else if(page === "test")
    {
      data = <Test/>
    }
    else if(page === "schedule")
    {
      data = ""
    }

    return (
      <div className=''>
        <div className='mb-10'><Header/></div>
        <div className='flex flex-row items-center align-middle'>
          <div><Sidebar/></div>
          <div className='m-auto'>{data}</div>
        </div>
      </div>
    )
  }
export default App;