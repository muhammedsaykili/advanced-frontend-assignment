// components/AmazonProductCard.js
import React from 'react';

function ProductCard({ image, title, price, rating, description }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.price}>{price}</p>
      <p style={styles.rating}>{rating}</p>
      <p style={styles.description}>{description}</p>
      <button style={styles.button}>Add to Cart</button>
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
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  title: {
    fontSize: '18px',
    margin: '10px 0',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'green',
  },
  rating: {
    color: '#FFA41C',
    fontSize: '14px',
  },
  description: {
    fontSize: '14px',
    color: '#555',
  },
  button: {
    backgroundColor: '#FF9900',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
  },
};

export default ProductCard;
