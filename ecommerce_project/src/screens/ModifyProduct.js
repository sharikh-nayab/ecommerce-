import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ModifyProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(list => {
        const p = list.find(prod => prod.id === parseInt(id));
        setProduct(p);
        setName(p.name);
        setCategory(p.category);
        setPrice(p.price);
        setDescription(p.description);
      });
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    // Replace with PUT API call
    alert('Product modified!');
    navigate('/manage');
  };

  if(!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Modify Product</h2>
      <form onSubmit={handleSubmit}>
        <div><label>Name:<input value={name} onChange={e => setName(e.target.value)} required /></label></div>
        <div><label>Category:<input value={category} onChange={e => setCategory(e.target.value)} required /></label></div>
        <div><label>Price:<input type="number" value={price} onChange={e => setPrice(e.target.value)} required /></label></div>
        <div><label>Description:<textarea value={description} onChange={e => setDescription(e.target.value)} required /></label></div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
