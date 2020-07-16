import React, { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    setMessages([...messages, input]);
    setInput("");
  }

  return (
    <div className="App">
      <input value={ input } onChange={(event) => setInput(event.target.value)} />
      <button onClick={ sendMessage }>Send Message</button>
      {/* <p>{ input }</p> */}
      {/* <p>{ messages }</p> */}

      { messages.map(message => (
        <p>{ message }</p>
      )) }
    </div>
  );
}

export default App;
