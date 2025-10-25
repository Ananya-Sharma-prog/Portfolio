import React, { useState, useEffect } from 'react';

const artistData = {
  name: "Ananya", 
  profileImage: "/images/profilePic.jpg",
  bio: "An artist and illustrator who works primarily with micron pens to create detailed, hand-drawn artworks. My illustrations focus on architectural structures, trees, and bonsai — subjects that allow me to explore balance, form, and the dialogue between nature and design. Each piece is built through intricate linework, patience, and precision, capturing both the strength of structure and the quiet beauty of organic growth. Through my art, I aim to celebrate the harmony between architecture and nature, inviting viewers to slow down and appreciate the beauty found in fine details.",
  skills: ["Hand-made illustrations", "Embroidery", "Logo / Poster design", "Weaving", "Print Development", "Dyeing and printing techniques", "Photography", "Video editing"],
  socials: [
    { name: "Instagram", url: "https://www.instagram.com/l.ananya_l/", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
    { name: "Behance", url: "https://www.behance.net/ananyasharma80/projects", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.2 6.2a2.3 2.3 0 0 1 2.3 2.3H12v-2.3a2.3 2.3 0 0 1 3.2 0z"></path><path d="M12 12h7.5a2.3 2.3 0 0 1-2.3 2.3v0a2.3 2.3 0 0 1-2.3-2.3h-3v2.3a2.3 2.3 0 0 1-2.3 2.3H5.2A2.8 2.8 0 0 1 2.5 12a2.8 2.8 0 0 1 2.7-2.8h11.6a2.3 2.3 0 0 0-2.3-2.3v0A2.3 2.3 0 0 0 12 9.2V6.2a2.8 2.8 0 0 1 2.8-2.8h.4a2.8 2.8 0 0 1 2.8 2.8v.2"></path><line x1="7.5" y1="15.5" x2="10.5" y2="15.5"></line></svg> },

  ],
};

const galleryItems = [
    { id: 1, title: "Korean Echo", description: "Inspired from traditional Korean architecture.", size: "A4", orientation: "portrait", imageUrl: "/images/potrait/drawing3.png" },
    { id: 2, title: "Suburban Geometry", description: "Pencil study capturing clean lines of mid-century modern architecture.", size: "A4", orientation: "landscape", imageUrl: "images/landscape/drawing4.png" },
    { id: 3, title: "Victorian Echo", description: "Illustration of Victorian era architecture.", size: "A3", orientation: "landscape", imageUrl: "images/landscape/drawing5.png" },
    { id: 4, title: "Concrete Stillness", description: "Study of symmetry and geometry.", size: "A4", orientation: "portrait", imageUrl: "/images/potrait/drawing1.png" },
    { id: 5, title: "Colonial Facade", description: "Pen and ink depiction of symmetrical colonial architecture with columns.", size: "A4", orientation: "portrait", imageUrl: "/images/potrait/drawing2.png" },
    { id: 6, title: "Botanical Canopy", description: "Study of different home plants and Bonsai Trees.", size: "A4", orientation: "landscape", imageUrl: "images/landscape/drawing6.png" },
    { id: 7, title: "Home Plant", description: "Detailed illustration of a home plant.", size: "A4", orientation: "portrait", imageUrl: "/images/potrait/drawing7.png" },
    { id: 8, title: "Bonsai Tree", description: "Study of organic growth of Bonsai tree.", size: "A4", orientation: "landscape", imageUrl: "images/landscape/drawing12.png" },
    { id: 9, title: "Cherry Blossom", description: "Detailed illustration of Cherry Blossom tree branch.", size: "A3", orientation: "landscape", imageUrl: "images/landscape/drawing13.png" },
    { id: 10, title: "Tree", description: "Detailed illustration of a grown tree.", size: "A4", orientation: "portrait", imageUrl: "/images/potrait/drawing8.png" },
    { id: 11, title: "Bonsai Tree", description: "Intricate illustration of Cherry Blossom Bonsai tree.", size: "A4", orientation: "portrait", imageUrl: "/images/potrait/drawing9.png" },
    { id: 12, title: "Zen", description: "Inspired from plants at Zen garden.", size: "A4", orientation: "landscape", imageUrl: "images/landscape/drawing14.png" },
    { id: 13, title: "Cypress Shadows", description: "Bold ink illustration of towering cypress trees with dramatic contrast.", size: "A3", orientation: "landscape", imageUrl: "images/landscape/drawing15.png" },
    { id: 14, title: "Botanical Fragment", description: "Illustration of Bonsai tree.", size: "A4", orientation: "portrait", imageUrl: "/images/potrait/drawing10.png" },
    { id: 15, title: "Vine Entanglement", description: "Detailed pencil work showing climbing vines with intricate tendrils.", size: "A4", orientation: "portrait", imageUrl: "/images/potrait/drawing11.png" },
    { id: 16, title: "Zenland", description: "Illustration inspired from Zen garden.", size: "A4", orientation: "landscape", imageUrl: "images/landscape/drawing16.png" },
];

const cssStyles = `
  :root {
    --primary-text: #333; --secondary-text: #555; --background-light: #ffffff; --background-gray: #f9fafb; --border-color: #e5e7eb;
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05); --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1); --border-radius: 0.5rem; --transition-speed: 300ms;
  }
  .app-wrapper { background-color: var(--background-light); font-family: system-ui, sans-serif; color: var(--primary-text); }
  .container { max-width: 80rem; margin: auto; padding: 0 1rem; }
  .section { padding: 6rem 1rem; }
  .bg-gray { background-color: var(--background-gray); }
  .section-title { font-size: 2.25rem; font-weight: 700; text-align: center; margin-bottom: 4rem; }
  .card-title { font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; }
  .header { padding: 1.5rem 0; border-bottom: 1px solid var(--border-color); }
  .header-container { display: flex; justify-content: space-between; align-items: center; }
  .logo { font-size: 1.5rem; font-weight: 700; }
  .nav-link { color: var(--secondary-text); text-decoration: none; transition: color var(--transition-speed); }
  .nav-link:hover { color: var(--primary-text); }
  .footer { background-color: #1f2937; color: #fff; padding: 2rem 0; text-align: center; }
  .about-grid { display: grid; gap: 2rem; align-items: flex-start; grid-template-columns: 1fr; }
  .about-col, .about-col-image { display: flex; flex-direction: column; gap: 2rem; }
  .profile-image-wrapper { width: 100%; height: 100%; border-radius: var(--border-radius); overflow: hidden; box-shadow: var(--shadow-lg); }
  .profile-image { width: 100%; height: 50%; object-fit: cover; }
  .about-card { background-color: var(--background-light); border: 1px solid var(--border-color); border-radius: var(--border-radius); padding: 1.5rem; box-shadow: var(--shadow-sm); transition: box-shadow var(--transition-speed); }
  .about-card:hover { box-shadow: var(--shadow-lg); }
  .about-card-large { display: flex; flex-direction: column; }
  .card-content { color: var(--secondary-text); line-height: 1.6; }
  .skills-container { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
  .skill-tag { background-color: #f3f4f6; color: #374151; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; }
  .experience-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; }
  .exp-role { font-weight: 600; } .exp-place { font-size: 0.875rem; } .exp-year { font-size: 0.75rem; color: #9ca3af; }
  .socials-container { display: flex; justify-content: center; gap: 1.5rem; margin-top: auto; padding-top: 1rem; }
  .social-link { color: #6b7280; transition: color var(--transition-speed); } .social-link:hover { color: var(--primary-text); }
  .masonry-grid { column-count: 1; column-gap: 2rem; }
  .masonry-item { margin-bottom: 2rem; break-inside: avoid; cursor: pointer; }
  .gallery-image-wrapper { position: relative; overflow: hidden; border-radius: var(--border-radius); box-shadow: var(--shadow-sm); transition: box-shadow var(--transition-speed); }
  .gallery-image-wrapper:hover { box-shadow: var(--shadow-xl); }
  .gallery-image { width: 100%; height: auto; display: block; transition: transform var(--transition-speed); }
  .gallery-image-wrapper:hover .gallery-image { transform: scale(1.05); }
  .gallery-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); opacity: 0; transition: opacity var(--transition-speed); display: flex; align-items: flex-end; padding: 1rem; color: white; }
  .gallery-image-wrapper:hover .gallery-overlay { opacity: 1; }
  .overlay-content { transform: translateY(1rem); transition: transform var(--transition-speed); }
  .gallery-image-wrapper:hover .overlay-content { transform: translateY(0); }
  .overlay-content h3 { font-weight: 700; font-size: 1.125rem; }
  .overlay-content p { font-size: 0.875rem; }
  .modal-backdrop { position: fixed; inset: 0; background-color: rgba(0, 0, 0, 0.85); z-index: 50; display: flex; align-items: center; justify-content: center; padding: 1rem; }
  .modal-content { position: relative; background-color: var(--background-light); border-radius: var(--border-radius); box-shadow: var(--shadow-xl); max-width: 64rem; width: 100%; max-height: 90vh; overflow: hidden; display: flex; flex-direction: column; }
  .modal-close-button { position: absolute; top: 1rem; right: 1rem; color: var(--primary-text); background: rgba(255,255,255,0.7); border: none; border-radius: 9999px; padding: 0.5rem; cursor: pointer; z-index: 10; line-height: 0; }
  .modal-close-button:hover { background: white; }
  .modal-image-container { flex-shrink: 0; background-color: #000; display: flex; align-items: center; justify-content: center; }
  .modal-image { width: 100%; height: 100%; object-fit: contain; max-height: 90vh; }
  .modal-details { padding: 2rem; overflow-y: auto; }
  .modal-title { font-size: 2rem; font-weight: 700; margin-bottom: 1rem; }
  .modal-description { color: var(--secondary-text); margin-bottom: 1.5rem; }
  .modal-tags { display: flex; gap: 0.5rem; }
  @media (min-width: 768px) { .about-grid { grid-template-columns: 1fr 2fr 1fr; } .masonry-grid { column-count: 2; } .modal-content { flex-direction: row; } .modal-image-container { width: 66.66%; } .modal-details { width: 33.33%; } }
  @media (min-width: 1024px) { .masonry-grid { column-count: 3; } }

  .about-card {
  background-color: var(--background-light);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-speed);
  width: 340px;      /* Or max-width: 100%; for fluid mobile */
  /* REMOVE any min-height, max-height, height, and overflow properties! */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.card-content {
  color: var(--secondary-text);
  line-height: 1.6;
  /* REMOVE overflow, max-height, text-overflow, -webkit-line-clamp, etc.! */
}
`;

const StyleInjector = () => <style>{cssStyles}</style>;

const AboutSection = () => (
  <section className="section">
    <div className="container">
      <h2 className="section-title">{artistData.name}</h2>
      <div className="about-grid">
        <div className="about-col">
          <div className="about-card about-card-large"><h3 className="card-title">About Me</h3><div className="card-content"><p>{artistData.bio}</p></div></div>
        </div>
        <div className="about-col-image"><div className="profile-image-wrapper"><img src={artistData.profileImage} alt={artistData.name} className="profile-image" /></div></div>
        <div className="about-col">
          <div className="about-card about-card-large"><h3 className="card-title">Connect</h3><div className="card-content">
            <p>Find me on social media or get in touch via my professional profiles.</p>
            <div className="socials-container">{artistData.socials.map((social, index) => (<a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={social.name}>{social.icon}</a>))}</div>
          </div></div>
        </div>
      </div>
    </div>
  </section>
);

const GallerySection = ({ onImageClick }) => (
  <section id="gallery" className="section bg-gray">
    <div className="container">
      <h2 className="section-title">Gallery</h2>
      <div className="masonry-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className="masonry-item" onClick={() => onImageClick(item)}>
            <div className="gallery-image-wrapper">
              <img src={item.imageUrl} alt={item.title} className="gallery-image" />
              <div className="gallery-overlay"><div className="overlay-content"><h3>{item.title}</h3><p>{item.size} / {item.orientation}</p></div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ImageModal = ({ item, onClose }) => {
  if (!item) return null;
  useEffect(() => {
    const handleKeyDown = (event) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-button" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
        <div className="modal-image-container"><img src={item.imageUrl} alt={item.title} className="modal-image" /></div>
        <div className="modal-details">
          <h2 className="modal-title">{item.title}</h2><p className="modal-description">{item.description}</p>
          <div className="modal-tags"><span className="skill-tag">{item.size}</span><span className="skill-tag">{item.orientation}</span></div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (item) => setSelectedImage(item);
  const handleCloseModal = () => setSelectedImage(null);

  return (
    <>
      <StyleInjector />
      <div className="app-wrapper">
        {/* <header className="header"><div className="container header-container"><h1 className="logo">{artistData.name} Portfolio</h1><nav><a href="#gallery" className="nav-link">View Gallery</a></nav></div></header> */}
        <main><AboutSection /><GallerySection onImageClick={handleImageClick} /></main>
        <footer className="footer"><div className="container"><p>&copy; {new Date().getFullYear()} {artistData.name}. All Rights Reserved.</p></div></footer>
        <ImageModal item={selectedImage} onClose={handleCloseModal} />
      </div>
    </>
  );
}

