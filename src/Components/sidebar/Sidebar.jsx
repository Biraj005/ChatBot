import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './sidebar.css'
function Sidebar() {

  const [extende, setExtende] = useState(!true)

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={()=>setExtende(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extende ? <p>New Chat</p> : null}
        </div>
       {extende ?  <div className="recent">
          <p className='recent-title'>recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>What is react.</p>
          </div>
        </div>:null}
      </div>
      <div className="bottom">

        <div className="bottom-icon recent-entry">
          <img src={assets.question_icon} alt="" />
           {extende?<p>Help</p>:null}
        </div>
        <div className="bottom-icon recent-entry">
          <img src={assets.history_icon} alt="" />
          {extende ?<p>Activity</p>:null}
        </div>
        <div className="bottom-icon recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extende?<p>Settings</p>:null}
        </div>
      </div>

    </div>
  )
}

export default Sidebar