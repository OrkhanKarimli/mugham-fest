import React from 'react';
import styles from './index.module.css';
import Wrapper from '../UI/wrapper/index.jsx';
import Sponsor1 from '../../assets/images/sponsors/sponsor1.svg';
import Sponsor2 from '../../assets/images/sponsors/sponsor2.svg';
import Sponsor3 from '../../assets/images/sponsors/sponsor3.svg';
import Sponsor4 from '../../assets/images/sponsors/sponsor4.svg';

const Sponsors = () => {
  return (
    <Wrapper>
      <div className={styles['title']}>
        <h2>Sponsor və tərəfdaşlar</h2>
        <div className={styles['line']}></div>
      </div>
      <div className={styles['sponsors']}>
        <img src={Sponsor1} alt='' />
        <img src={Sponsor2} alt='' />
        <img src={Sponsor3} alt='' />
        <img src={Sponsor1} alt='' />
        <img src={Sponsor4} alt='' />
        <img src={Sponsor3} alt='' />
        <img src={Sponsor1} alt='' />
        <img src={Sponsor2} alt='' />
        <img src={Sponsor3} alt='' />
      </div>
      <div className={styles['sponsors']}>
        <img src={Sponsor1} alt='' />
        <img src={Sponsor4} alt='' />
        <img src={Sponsor3} alt='' />
        <img src={Sponsor1} alt='' />
        <img src={Sponsor1} alt='' />
        <img src={Sponsor3} alt='' />
        <img src={Sponsor1} alt='' />
        <img src={Sponsor3} alt='' />
        <img src={Sponsor4} alt='' />
      </div>
      <div className={styles['sponsors']}>
        <img src={Sponsor4} alt='' />
        <img src={Sponsor1} alt='' />
        <img src={Sponsor3} alt='' />
        <img src={Sponsor1} alt='' />
        <img src={Sponsor3} alt='' />
        <img src={Sponsor2} alt='' />
        <img src={Sponsor1} alt='' />
        <img src={Sponsor2} alt='' />
        <img src={Sponsor4} alt='' />
      </div>
    </Wrapper>
  );
};

export default Sponsors;
