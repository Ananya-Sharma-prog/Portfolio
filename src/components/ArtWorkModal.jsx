import React from 'react';
import '../ArtWorkModal.module.css';

const ArtworkModal = ({ artwork, onClose }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <span className="close-icon" onClick={onClose}>×</span>
      <div className="artwork-img" style={{ background: '#b9b9d0' }}>
        <img src={artwork.img} alt={artwork.title} />
      </div>
      <div className="artwork-desc">
        <h2>{artwork.title}</h2>
        <p>{artwork.description}</p>
        <div>
          <span className="tag">{artwork.size}</span>
          <span className="tag">{artwork.orientation}</span>
        </div>
      </div>
    </div>
  </div>
);

export default ArtworkModal;
