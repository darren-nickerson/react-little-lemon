import React from 'react';
import styles from './SectionContainer.module.css';

const SectionContainer = ({ children, outerColor, innerColor, paddingTop=0, paddingBottom=0, tag: Tag = 'section' }) => {
  const outerStyle = outerColor ? { backgroundColor: outerColor } : null;
  const innerStyle = innerColor ? { backgroundColor: innerColor, paddingTop, paddingBottom } : null;

  return (
    <Tag className={styles.outer} style={outerStyle}>
      <div className={styles.container} style={innerStyle}>
        {children}
      </div>
    </Tag>
  );
};

export default SectionContainer;
