import React from 'react';
import styles from './index.module.css';
import Wrapper from '../UI/wrapper';
import { RightArrow, TripleTwinkle } from '../../icons/icons';
import Button from '../UI/button';
import Singer from '../../assets/images/singers/siger.png';
import Singer1 from '../../assets/images/singers/singer1.png';
import Singer2 from '../../assets/images/singers/singer2.png';

import CurvedText from '../curvedText';

const Singers = () => {
  return (
    <Wrapper>
      <div className={styles['title']}>
        <div>
          <TripleTwinkle />
          <div className={styles['line']}></div>
        </div>
        <h2>DÜNYA ŞÖHRƏTLİ XƏNƏNDƏLƏRİMİZ</h2>
      </div>
      <div className={styles['text-para']}>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. but also the
          leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <Button>
          Daha çox <RightArrow />
        </Button>
      </div>
      <div className={styles['singers']}>
        <div className={styles['singer1']}>
          <img src={Singer1} alt='singer' />
          <div>
            <CurvedText text={'Elnarə Rüstəmova'} />
          </div>
        </div>
        <div className={styles['singer2']}>
          <img src={Singer1} alt='singer' />
          <div>
            <CurvedText text={'Elnarə Rüstəmova'} />
          </div>
        </div>
        <div className={styles['singer3']}>
          <img src={Singer} alt='singer' />
          <div>
            <CurvedText text={'Alim Qasımov'} />
          </div>
        </div>
        <div className={styles['singer4']}>
          <img src={Singer2} alt='singer' />
          <div>
            <CurvedText text={'Məleykə Hümbətova'} />
          </div>
        </div>
        <div className={styles['singer5']}>
          <img src={Singer2} alt='singer' />
          <div>
            <CurvedText text={'Məleykə Hümbətova'} />
          </div>
        </div>
        <div className={styles['singer6']}>
          <img src={Singer2} alt='singer' />
          <div>
            <CurvedText text={'Məleykə Hümbətova'} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Singers;
