// components/UserCard.js
import React from 'react';

function UserCard({ name, age, bio }) {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
}

// Inline styles
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
  }
};

export default UserCard;
