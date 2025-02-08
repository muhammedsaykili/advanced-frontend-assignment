import React from 'react'; // Import React for JSX syntax and component rendering
import ProductCard from '../components/ProductCard'; // Importing ProductCard component to display product details

export default function Products() { //
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }} > 
    {/* Rendering individual ProductCard components with details like image, title, price, and rating */}
      <ProductCard 
        image="https://images.unsplash.com/photo-1578849278619-e73505e9610f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Popcorn"
        price="Small: $5, Medium: $7, Large: $9"
        rating="☆☆☆☆☆ = Excellent"
        description=""
      />
      
      <ProductCard 
        image="https://images.unsplash.com/photo-1527960471264-932f39eb5846?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Soft Drinks"
        price="Small: $4, Medium: $5, Large: $6"
        rating="☆☆☆☆☆ = Excellent"
        description=""
      />
      
      <ProductCard 
        image="https://images.unsplash.com/photo-1576712967455-c8d22580e9be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Candy"
        price="Small: $3.50, Medium: $5.50, Large: $7.50"
        rating="☆☆☆☆ = Good"
        description=""
      />
      
      <ProductCard 
        image="https://images.unsplash.com/photo-1571328003963-9742129e3951?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Nachos & Cheese"
        price="$6.50"
        rating="☆☆☆☆ = Good"
        description=""
      />
      
      <ProductCard 
        image="https://images.unsplash.com/photo-1612392166886-ee8475b03af2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Hot Dogs"
        price="$6"
        rating="☆☆☆ = Average"
        description=""
      />
      
      <ProductCard 
        image="https://images.unsplash.com/photo-1653122025865-5e75e63cf4ba?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Ice Cream & Milkshakes"
        price="Small: $5, Medium: $7, Large: $9"
        rating="☆☆☆☆ = Good"
        description=""
      />
      
      <ProductCard 
        image="https://images.unsplash.com/photo-1708597525178-6c302364f37c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Gourmet Snacks"
        price="Small: $2.5, Medium: $5, Large: $10"
        rating="☆☆☆ = Average"
        description=""
      />
      
      <ProductCard 
        image="https://images.unsplash.com/photo-1665467607007-e3aef10404e9?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Alcoholic Beverages"
        price="Beer: $8, Wine: $10, Cocktails: $12"
        rating="☆☆☆☆ = Good"
        description=""
      />
    </div>
  );
}
