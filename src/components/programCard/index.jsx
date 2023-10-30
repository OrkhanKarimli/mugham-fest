import React from 'react';
import styles from './index.module.css';
import Button from '../UI/button';
import { ArrowRightDarkIcon, RightArrow } from '../../icons/icons';
import { Link } from 'react-router-dom';

const ProgramCard = ({ image, city, date, info }) => {
  return (
    <div className={styles['card']}>
      <img src={image} alt='card' />
      <div className={styles['card-text']}>
        <h3>{city}</h3>
        <h4>{date}</h4>
        <p>{info}</p>
        <Link to={''}>
          Ətraflı <RightArrow />
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
