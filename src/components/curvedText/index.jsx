import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

const CurvedText = ({ text }) => {
  const [newText, setNewText] = useState(null);
  useEffect(() => {
    const output = text.split('');
    setNewText(output);
  }, []);
  return (
    <>
      {newText ? (
        <div className={styles['estrellas']}>
          {newText.map((item, index) => (
            <span>{item}</span>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default CurvedText;
