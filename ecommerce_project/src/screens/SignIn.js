import React, { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    // Replace endpoint as per project statement
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if(res.ok) {
      setMessage('Login successful!');
    } else {
      setMessage('Login failed!');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div><label>Email:<input type="email" value={email} onChange={e => setEmail(e.target.value)} required /></label></div>
        <div><label>Password:<input type="password" value={password} onChange={e => setPassword(e.target.value)} required /></label></div>
        <button type="submit">Sign in</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
