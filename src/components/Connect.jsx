// import React from 'react';
// import './src/Connect.module.css';

// const Connect = ({ socials }) => (
//   <div className="connect">
//     <h3>Connect</h3>
//     <p>Find me on social media or get in touch via my professional profiles.</p>
//     <a href={socials.instagram}>Instagram</a>
//     <a href={socials.linkedin}>LinkedIn</a>
//     <a href={socials.website}>Website</a>
//   </div>
// );

// export default Connect;

import React from 'react';
import styles from '../Connect.module.css';

const Connect = ({ socials }) => (
  <div className={styles.connect}>
    <h3>Connect</h3>
    <p>Find me on social media or get in touch via my professional profiles.</p>
    <a href={socials.instagram}>Instagram</a>
    <a href={socials.linkedin}>LinkedIn</a>
    <a href={socials.website}>Website</a>
  </div>
);

export default Connect;
