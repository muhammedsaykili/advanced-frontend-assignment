import { useState } from 'react';

export default function FormComponent() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      setMessage('Error! Please Enter A Valid Comment');
    } else {
      setMessage('Your Comment Has Been Successfully Submitted');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Please comment about our theatre"
      />
      <button type="submit">Submit Comment</button>
      <p>{message}</p>
    </form>
  );
}


