import * as React from 'react';
import { getCssForRow, getCssForTextArea } from './common.js';
import { useState, useEffect } from 'react';

import Feedback from './feedback';

const LOCAL_STORAGE_KEY = 'LOCAL_STORAGE_KEY';

function App() {
  const [textareaValue, setTextareaValue] = useState('');
  const [storedValue, setStoredValue] = useState('');
  const [message, setMessage] = useState('');

  const textareaChange = (event) => {
    const value = event.target.value;
    setTextareaValue(value);
  };

  const upsertIntoLocalstorage = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, textareaValue);
    setMessage('upsertIntoLocalstorage');
  };

  useEffect(() => {
    // Shove what is in localstorage into the textarea as quick as you can!
    setStoredValue(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedValue) {
      setTextareaValue(storedValue);
    } else {
    }
  }, [storedValue]);

  return (
    <div>
      <h5>
        This repo is to play with alloy and react and adobe sdk
        <br />
        <a href="https://github.com/mulefish/adobe_alloy_starter_toy">
          github repo
        </a>
      </h5>
      <div style={getCssForRow()}>
        <button onClick={() => upsertIntoLocalstorage()}>
          update localstorage
        </button>
        &nbsp;
        <Feedback message={message} setMessage={setMessage} />
        &nbsp;
      </div>
      <hr></hr>
      <textarea
        style={getCssForTextArea()}
        value={textareaValue}
        onChange={textareaChange}
      />
      <hr></hr>
      <button onClick={() => upsertIntoLocalstorage()}>
        update localstorage
      </button>
    </div>
  );
}

export default App;
