import Sidebar from './components/sidebar';
import Header from './components/header.js';
import Box from "./components/Box.js";
import React, { useState } from "react";
import AllChat from './components/AllChat.js';
import Chat from './components/Chat.js';
import Test from './components/test.js';

function App() {

  const [state,setState] = React.useState({
    questionNo: 0,
    fade:false,
    page:"main",
  })

  function pageUpdate(a){
    setState({
      ...state,
      page:a,
    })
  }

  const page = state.page
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
        <div className='mb-10'><Header func = {pageUpdate}/></div>
        <div className='flex flex-row items-center align-middle'>
          <div><Sidebar stateFunc = {pageUpdate} page = {state.page}/></div>
          <div className='m-auto'>{data}</div>
        </div>
      </div>
    )
  }
export default App;