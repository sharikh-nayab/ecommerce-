import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // Replace with POST API call
    alert('Product added!');
    navigate('/manage');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:<input value={name} onChange={e => setName(e.target.value)} required /></label>
        </div>
        <div>
          <label>Category:<input value={category} onChange={e => setCategory(e.target.value)} required /></label>
        </div>
        <div>
          <label>Price:<input type="number" value={price} onChange={e => setPrice(e.target.value)} required /></label>
        </div>
        <div>
          <label>Description:<textarea value={description} onChange={e => setDescription(e.target.value)} required /></label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
