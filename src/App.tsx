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

  const updateLocalStorage = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, textareaValue);
    setMessage('Upsert to localstorage!');
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
      <div style={getCssForRow()}>
        <button onClick={() => updateLocalStorage()}>
          update localstorage
        </button>
        &nbsp;
        <Feedback message={message} setMessage={setMessage} />
      </div>
      <hr></hr>
      <textarea
        style={getCssForTextArea()}
        value={textareaValue}
        onChange={textareaChange}
      />
      <hr></hr>
      <button onClick={() => updateLocalStorage()}>update localstorage</button>
    </div>
  );
}

export default App;
