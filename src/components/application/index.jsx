import React from 'react';
import styles from './index.module.css';

const Application = () => {
  return (
    <form className={styles['form']}>
      <div className={styles['form-inputs']}>
        <div className={styles['form-name']}>
          <input type='text' name='name' id='' placeholder='Ad' />
          <input type='text' name='surname' id='' placeholder='Soyad' />
        </div>
        <input type='email' name='email' id='' placeholder='Mail ünvan' />
        <textarea name='note' id='' placeholder='Qeyd'></textarea>
        <div className={styles['button']}>
          <button>Göndər</button>
        </div>
      </div>
    </form>
  );
};

export default Application;
