import React from 'react';
import '../About.module.css';

const About = ({ bio }) => (
  <section className="{styles.about}">
    <h2>About Me</h2>
    <p>{bio}</p>
  </section>
);

export default About;
