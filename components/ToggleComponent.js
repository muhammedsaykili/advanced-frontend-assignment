import { useState } from 'react';

export default function FormComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Toggle'}
      </button>
      {isVisible && <p>Enjoy Your Movie!!!</p>}
    </div>
  );
}

