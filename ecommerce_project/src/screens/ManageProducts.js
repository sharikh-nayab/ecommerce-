import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteProductModal from '../components/DeleteProductModal';

const isAdmin = true; // Replace with real auth check

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [toDelete, setToDelete] = useState(null);

  useEffect(() => {
    fetch('/products.json').then(res => res.json()).then(setProducts);
  }, []);

  const handleDelete = id => {
    setToDelete(id);
  };

  const removeProduct = id => {
    // Replace with DELETE API call
    setProducts(products.filter(p => p.id !== id));
    setToDelete(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      {isAdmin && <Link to="/manage/add">Add Product</Link>}
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {products.map(p => (
          <div key={p.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h4>{p.name}</h4>
            {isAdmin && (
              <>
                <Link to={`/manage/edit/${p.id}`}>✏️</Link>
                <button onClick={() => handleDelete(p.id)}>🗑️</button>
              </>
            )}
          </div>
        ))}
      </div>
      {toDelete && <DeleteProductModal id={toDelete} onConfirm={removeProduct} onCancel={() => setToDelete(null)} />}
    </div>
  );
}
