import React from 'react';
import Wrapper from '../UI/wrapper';
import styles from './index.module.css';
import CardImage from '../../assets/images/program images/heydar-aliyev-centre-04-2048x1709 1 (2).png';
import CardImage1 from '../../assets/images/program images/stefan-k-DDuS2bl-Oqw-unsplash 1.png';

import ProgramCard from '../programCard';
import { TripleTwinkle } from '../../icons/icons';

const Program = () => {
  return (
    <Wrapper>
      <div className={styles['title-info']}>
        <div className={styles['title']}>
          <h2>PROQRAM VƏ MƏKAN</h2>
          <div>
            <div className={styles['line']}></div>
            <TripleTwinkle />
          </div>
        </div>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
      <div className={styles['program-cards']}>
        <ProgramCard
          image={CardImage}
          city={'Bakı'}
          date={'18-21 iyun 18:00'}
          info={
            'Heydər Əliyev Fondunun təşəbbüsü ilə iyunun 18-25-də “Muğam aləmi” (“Space of Mugam”) 6-cı Beynəlxalq Musiqi Festivalı'
          }
        />
        <ProgramCard
          image={CardImage}
          city={'Şuşa'}
          date={'21-25 iyun 18:00'}
          info={
            'Heydər Əliyev Fondunun təşəbbüsü ilə iyunun 18-25-də “Muğam aləmi” (“Space of Mugam”) 6-cı Beynəlxalq Musiqi Festivalı'
          }
        />
      </div>
    </Wrapper>
  );
};

export default Program;
