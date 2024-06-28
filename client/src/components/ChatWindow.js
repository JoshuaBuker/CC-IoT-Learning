import { React, useState, useEffect } from 'react'
import axios from 'axios';

function ChatWindow() {

  const [messageList, setMessageList] = useState([]);
  const [ws, setWs] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      axios.post('http://localhost:3001/messages', { message: `React: ${inputValue}` });
      
      setInputValue('');
    }
  }
  
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001/messages");

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      const message = event.data;
      setMessageList(prevMessages => [...prevMessages, message]);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="p-1 border">
      <ul className='chat-window-list no-bullets'>
        { messageList.map((message) => <li>{message}</li> ) }
      </ul>
      <input type="text" 
        name="name"
        placeholder='Type to chat'
        value={inputValue} 
        style={{width: '100%'}}
        className='mt-3'
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e)}
        autoComplete="off"
        />
    </div>
  )
}

export default ChatWindow