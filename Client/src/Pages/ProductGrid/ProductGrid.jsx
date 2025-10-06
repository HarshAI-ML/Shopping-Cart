import React, { useEffect, useState } from 'react';
import Cards from '../../Components/Cards/Cards.jsx';
import './ProductGrid.css';
  // Component to align cards in a grid like manner
function ProductGrid() {
  const [products, setProducts] = useState([]);
  // Data fetched from backend json file on Component Mount 
  useEffect(() => {
    fetch('http://localhost:5000/api/products') 
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  return (
    <div className="product-grid">
      {products.map(product => (
        <Cards
          id={product.id}
          image={product.image} 
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
