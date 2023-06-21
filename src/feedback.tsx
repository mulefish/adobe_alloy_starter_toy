import * as React from 'react';
import { useEffect } from 'react';

/*
HCI principles!
*/
const Feedback = ({ message, setMessage }) => {
  useEffect(() => {
    let timeoutId;

    if (message !== '') {
      timeoutId = setTimeout(() => {
        setMessage('');
      }, 500);
    }

    return () => clearTimeout(timeoutId);
  }, [message]);

  return <span>{message}</span>;
};
export default Feedback;
