import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Button = ({ children, to = '', style = 'black' }) => {
  return (
    <>
      {style === 'black' ? (
        <Link to={to} className={styles['button']}>
          {children}
        </Link>
      ) : null}
      {style === 'transparent' ? (
        <Link to={to} className={styles['button-t']}>
          {children}
        </Link>
      ) : null}
    </>
  );
};

export default Button;
