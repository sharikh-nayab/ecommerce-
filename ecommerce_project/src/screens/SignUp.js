import React, { useState } from 'react';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if(password !== confirm) {
      setMessage('Passwords do not match');
      return;
    }
    // Replace endpoint as per project statement
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password, contact })
    });
    if(res.ok) {
      setMessage('Signup successful!');
    } else {
      setMessage('Signup failed!');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div><label>First Name:<input value={firstName} onChange={e => setFirstName(e.target.value)} required /></label></div>
        <div><label>Last Name:<input value={lastName} onChange={e => setLastName(e.target.value)} required /></label></div>
        <div><label>Email Address:<input type="email" value={email} onChange={e => setEmail(e.target.value)} required /></label></div>
        <div><label>Password:<input type="password" value={password} onChange={e => setPassword(e.target.value)} required /></label></div>
        <div><label>Confirm Password:<input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} required /></label></div>
        <div><label>Contact Number:<input value={contact} onChange={e => setContact(e.target.value)} required /></label></div>
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
