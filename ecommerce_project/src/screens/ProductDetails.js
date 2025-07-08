import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(list => setProduct(list.find(p => p.id === parseInt(id))));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => navigate('/order', { state: { product } })}>Place Order</button>
    </div>
  );
}
