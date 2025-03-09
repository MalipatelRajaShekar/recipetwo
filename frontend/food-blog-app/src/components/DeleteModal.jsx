// DeleteModal.js
import React from 'react';

function DeleteModal({ onConfirm, onCancel, recipeTitle }) {
  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <h2>Are you sure you want to delete "{recipeTitle}"?</h2>
        <div className="modal-actions">
          <button onClick={onConfirm} className="delete-btn">Delete</button>
          <button onClick={onCancel} className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
