import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function OrderStepper() {
  const [step, setStep] = useState(1);
  const { product } = useLocation().state || {};
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handlePlace = () => {
    // Replace with actual API call
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <div>Step {step} of 3</div>
      {step === 1 && (
        <div>
          <h3>Product</h3>
          <p>{product?.name}</p>
          <button onClick={() => setStep(2)}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h3>Address</h3>
          <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Enter address" required />
          <button onClick={() => setStep(1)}>Back</button>
          <button onClick={() => setStep(3)}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h3>Review</h3>
          <p>Product: {product?.name}</p>
          <p>Address: {address}</p>
          <button onClick={() => setStep(2)}>Back</button>
          <button onClick={handlePlace}>Place Order</button>
        </div>
      )}
    </div>
  );
}
