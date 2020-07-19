import React, { useState, useEffect } from 'react';
import './App.css';

import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

// Component
import Message from './Message';

// firebase
import firebase from 'firebase';

// dB
import { db } from './firebase';

// Flipmove
import FlipMove from 'react-flip-move';

function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername ] = useState("");

  useEffect(() => {
    setUsername(
      prompt("Please! enter your name")
    );
  }, [])

  useEffect(() => {
    db.collection('Messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(
          snapshot.docs.map(doc => ({id: doc.id, data: doc.data()}))
        );
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('Messages').add({
      text: input,
      name: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  }

  return (
    <div className="App">
      { username ? (<h1>Welcome, { username }</h1>) : "" }
      <form className="app_form">
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

      <FlipMove>
        { messages.map(({id, data}) => (
          <Message key={ id } current={ username } user={ data.name } text={ data.text } />
        )) }
      </FlipMove>
    </div>
  );
}

export default App;
