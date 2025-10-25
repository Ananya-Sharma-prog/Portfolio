import React from 'react';
import '../Gallery.module.css';

const Gallery = ({ artworks, onArtworkClick }) => (
  <div className="gallery">
    {artworks.map((art) => (
      <div
        key={art.id}
        className="art-card"
        onClick={() => onArtworkClick(art)}
        style={{ backgroundColor: '#b9b9d0' }} // for the demo, static color
      >
        {art.title}
      </div>
    ))}
  </div>
);

export default Gallery;
