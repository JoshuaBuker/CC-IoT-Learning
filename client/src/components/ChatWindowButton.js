import React from 'react'
import ChatIcon from '../resources/svg/ChatIcon';
import ChatWindow from './ChatWindow';

function ChatWindowButton() {
  return (
    <>
      <button className="btn btn-primary m-2 chat-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Chat</button>

      <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">In-game Chat<hr/></h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ChatWindow/>
        </div>
      </div>
    </>
  )
}

export default ChatWindowButton