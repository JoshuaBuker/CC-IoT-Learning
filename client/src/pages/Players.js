import React from 'react'
import Nav from '../components/Nav';
import ChatWindowButton from '../components/ChatWindowButton';

function Players() {
  return (
    <>
      <div className="container-fluid" style={{height: "100vh"}}>
        <div className="row">
          <Nav/>
          <div className="col offset-1">
            <h1 className='text-center'>Players</h1>
          </div>
        </div>
      </div>
      <ChatWindowButton/>
    </>
  )
}

export default Players