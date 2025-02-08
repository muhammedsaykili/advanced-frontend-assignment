// components/MovieCard.js
import React from 'react';

export default function MovieCard({ title, poster, genre, rating, description }) {
    return (
        <div style={styles.card}>
            <img src={poster} alt={title} />
            <h3>{title}</h3>
            <p><strong>Genre:</strong> {genre}</p>
            <p><strong>Rating:</strong> {rating ? `☆ ${rating} / 10` : 'Not Rated'}</p>
            <p>{description}</p>
            <button>Watch Trailer</button>
          </div>
        );
    }

    

    // Inline Styles
const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      maxWidth: '250px',
      textAlign: 'center',
      boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
    },
    poster: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    description: {
      fontSize: '14px',
      color: '#555',
    },
    button: {
      backgroundColor: '#E50914',
      color: 'white',
      border: 'none',
      padding: '10px',
      cursor: 'pointer',
      borderRadius: '5px',
      marginTop: '10px',
    },
  };


