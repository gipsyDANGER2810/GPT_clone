import React, { useEffect, useState, useRef} from 'react'
import sendBtn from '../../assets/send.svg'
import userIcon from '../../assets/user-icon.png'
import gptLogo from '../../assets/chatgptLogo.svg'
import './Chat.css'
import { sendMessageToOpenAi } from '../openai/OpenAi'

function Chat() {
  const msgEnd = useRef(null)
  const[input,setInput] = useState("")
  const[messages, setMessges] = useState([
    {
    text: "",
    isBot: true,
  }
])
  useEffect(()=>{msgEnd.current.scrollIntoView()}
  ,[messages])
  const handleSend = async () =>{
    const text = input
    setInput('')
    setMessges([
      ...messages,
      {text, isBot:false}
    ])
      const res = await sendMessageToOpenAi(text)
      setMessges([
        ...messages,
      {text, isBot:false},
      {text:res, isBot:true}
      ])
  }

  const handleEnter = async (e) =>{
      if(e.key == 'Enter') await handleSend()
  }
  return (
    <div className='main'>
      <div className="chats">

       {messages.map((message,i)=>
                  <div key={i} className={message.isBot?"chat bot":"chat"}>
                  <img className='chatImg' src={message.isBot?gptLogo:userIcon} alt="" />
                  <p className="txt">{message.text}</p>
              </div>
        )} 
        <div ref={msgEnd}/>
      </div>
      <div className="chatFooter">
        <div className="input">
            <input type="text" name="" id="" placeholder='Message ChatGPT...' value={input} onChange={(e)=>{setInput(e.target.value)}} onKeyDown={handleEnter}/>
            <button className="send" onClick={handleSend}><img src={sendBtn} alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Chat
