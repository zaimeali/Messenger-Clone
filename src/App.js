import React, { useState, useEffect } from 'react';
import './App.css';

import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

// Component
import Message from './Message';

function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{name: "zeus", text: "nice"}]);
  const [username, setUsername ] = useState("");

  useEffect(() => {
    setUsername(
      prompt("Please! enter your name")
    );
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {name: username, text: input}]);
    setInput("");
  }

  return (
    <div className="App">
      { username ? (<h1>Welcome, { username }</h1>) : "" }
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input 
            value={ input } 
            onChange={(event) => setInput(event.target.value)} 
          />
          <Button 
              color="primary" 
              variant="contained" 
              type="submit"
              disabled={ !input }
              onClick={ sendMessage }
            >
              Send Message
            </Button>
        </FormControl>
      </form>
      {/* <p>{ input }</p> */}
      {/* <p>{ messages }</p> */}

      { messages.map(message => (
        <Message current={username} user={ message.name } text={ message.text } />
      )) }
    </div>
  );
}

export default App;
