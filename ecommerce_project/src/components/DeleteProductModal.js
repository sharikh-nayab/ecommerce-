import React from 'react';

export default function DeleteProductModal({ id, onConfirm, onCancel }) {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '4px' }}>
        <p>Are you sure you want to delete product #{id}?</p>
        <button onClick={() => onConfirm(id)}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  );
}
