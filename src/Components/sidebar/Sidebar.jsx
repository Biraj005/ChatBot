import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './sidebar.css'
import { Context } from '../../context/Context'
import { useContext } from 'react'
function Sidebar() {

  const [extende, setExtende] = useState(!true)


  const {

    prevousPromt,
    onSent,
    setRecentPrompt,
    newChat

  } = useContext(Context);

  const loadProm = async (promt) => {

    setRecentPrompt(promt);
    await onSent(promt);

  }

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={() => setExtende(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extende ? <p>New Chat</p> : null}
        </div>
        {extende ? <div className="recent">
          <p className='recent-title'>recent</p>
          {prevousPromt.map((item, idx) => {

            return <div onClick={(e) => loadProm(item)} className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>{item.slice(0, 18)}...</p>

            </div>

          })}
        </div> : null}
      </div>
      <div className="bottom">

        <div className="bottom-icon recent-entry">
          <img src={assets.question_icon} alt="" />
          {extende ? <p>Help</p> : null}
        </div>
        <div className="bottom-icon recent-entry">
          <img src={assets.history_icon} alt="" />
          {extende ? <p>Activity</p> : null}
        </div>
        <div className="bottom-icon recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extende ? <p>Settings</p> : null}
        </div>
      </div>

    </div>
  )
}

export default Sidebar