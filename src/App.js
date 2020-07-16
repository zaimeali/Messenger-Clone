import React, { useState } from 'react';
import './App.css';

import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  }

  return (
    <div className="App">
      <FormControl onSubmit={ sendMessage }>
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
        >
          Send Message
        </Button>
      </FormControl>
      {/* <p>{ input }</p> */}
      {/* <p>{ messages }</p> */}

      { messages.map(message => (
        <p>{ message }</p>
      )) }
    </div>
  );
}

export default App;
