import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [messageList, setMessageList] = useState([]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState(null);
  
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001/messages');

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
    <div className="container justify-content-center align-items-center">
      <div className='chatWindow'>
        {messageList.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
