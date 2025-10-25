import React from 'react';
import styles from '../Experience.module.css';

const Experience = ({ experience }) => (
  <div className={styles.experience}>
    <h3>Experience</h3>
    {experience.map((exp, idx) => (
      <div key={idx}>
        <strong>{exp.title}</strong><br />
        {exp.company}<br />
        <em>{exp.years}</em>
      </div>
    ))}
  </div>
);

export default Experience;

