import { useState } from 'react';

export default function FormComponent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '10px',
        backgroundColor: isHovered ? 'red' : 'gray',
        transition: 'background-color 0.1s',
      }}
    >
      Hover Your Mouse
    </div>
  );
}
