import React from 'react';
import styles from '../skillTags.module.css';

const SkillTags = ({ skills }) => (
  <div className={styles.skills}>
    <h3>Skills</h3>
    <div>
      {skills.map((skill) => (
        <span key={skill} className={styles.tag}>{skill}</span>
      ))}
    </div>
  </div>
);

export default SkillTags;
