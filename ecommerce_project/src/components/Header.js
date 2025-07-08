import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ onSearch }) {
  return (
    <header style={{ backgroundColor: '#3f51b5', padding: '10px', display: 'flex', alignItems: 'center' }}>
      <div>
        <img src="/logo.svg" alt="Logo" style={{ height: '40px' }} />
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search products..."
          onChange={e => onSearch(e.target.value)}
          style={{ padding: '5px', width: '60%', borderRadius: '4px' }}
        />
      </div>
      <div>
        <Link to="/signin" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Login</Link>
        <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>Sign up</Link>
      </div>
    </header>
  );
}
