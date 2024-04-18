import React from 'react'
import chatgptLogo from '../../assets/chatgpt.svg'
import "./Sidebar.css"
import addBtn from '../../assets/add-30.png'
import msgIcon from '../../assets/message.svg'
import home from '../../assets/home.svg'
import saved from '../../assets/bookmark.svg'
import rocket from '../../assets/rocket.svg'

function Sidebar() {


    return (
        <div className='sidebar'>
            <div className="upper">
                <div className="upperSideTop">
                    <img src={chatgptLogo} alt="logo" className="logo" />
                    <span className="brand">ChatGPT</span>
                </div>
                <button className="midBtn" onClick={()=>{window.location.reload()}}><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
                <div className="upperSideQueries">
                    <button className="query" ><img src={msgIcon} alt="" />What is Programming?</button>
                    <button className="query" ><img src={msgIcon} alt="" />How to use an API?</button>
                </div>
            </div>
            <div className="lower">
                <button className="listItems">
                    <img src={home} alt="" className="listItemsImg" />
                    Home
                </button>
                <button className="listItems">
                    <img src={saved} alt="" className="listItemsImg" />
                    Saved
                </button>
                <button className="listItems">
                    <img src={rocket} alt="" className="listItemsImg" />
                    Upgrade to Pro
                </button>
            </div>
        </div>
    )
}

export default Sidebar
