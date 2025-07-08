import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({ searchQuery }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState('All');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    fetch('/products.json').then(res => res.json()).then(setProducts);
    fetch('/categories.json').then(res => res.json()).then(setCategories);
  }, []);

  let filtered = products
    .filter(p => selectedCat === 'All' || p.category === selectedCat)
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  if (sortOption === 'price_asc') filtered.sort((a,b) => a.price - b.price);
  if (sortOption === 'price_desc') filtered.sort((a,b) => b.price - a.price);
  if (sortOption === 'name_asc') filtered.sort((a,b) => a.name.localeCompare(b.name));
  if (sortOption === 'name_desc') filtered.sort((a,b) => b.name.localeCompare(a.name));

  return (
    <div style={{ padding: '20px' }}>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setSelectedCat(cat)}
          style={{ marginRight: '10px', backgroundColor: selectedCat===cat ? '#3f51b5' : '#e0e0e0', color: selectedCat===cat ? 'white' : 'black' }}
        >
          {cat}
        </button>
      ))}
      <select onChange={e => setSortOption(e.target.value)} value={sortOption}>
        <option value="">Sort By</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="name_asc">Name: A-Z</option>
        <option value="name_desc">Name: Z-A</option>
      </select>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {filtered.map(p => (
          <div key={p.id} style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px', margin: '10px', width: '200px' }}>
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <Link to={`/products/${p.id}`}>Buy</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
