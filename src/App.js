import React, { useState, useEffect } from 'react';
import './App.css';

import { FormControl, Input } from '@material-ui/core';

// Component
import Message from './Message';

// firebase
import firebase from 'firebase';

// dB
import { db } from './firebase';

// Flipmove
import FlipMove from 'react-flip-move';

// Icon
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

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
      .orderBy('timestamp', 'asc')
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
      { username ? (<div className="app_head"><h1>Welcome, { username }</h1><hr /></div>) : "" }
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input 
            value={ input }
            placeholder="Enter a message..."
            onChange={(event) => setInput(event.target.value)} 
            className="app_inputControl"
          />
          <IconButton 
              color="primary" 
              variant="contained" 
              type="submit"
              disabled={ !input }
              onClick={ sendMessage }
              className="app_iconButton"
            >
              <SendIcon />
            </IconButton>
        </FormControl>
      </form>
      {/* <p>{ input }</p> */}
      {/* <p>{ messages }</p> */}

      <FlipMove className="up_show">
        { messages.map(({id, data}) => (
          <Message key={ id } current={ username } user={ data.name } text={ data.text } />
        )) }
      </FlipMove>
    </div>
  );
}

export default App;
