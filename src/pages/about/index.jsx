import React from 'react';
import Img from '../../assets/images/Frame .png';
import styles from './index.module.css';
import { TripleTwinkleCenter } from '../../icons/icons';
import WrapperNarrow from '../../components/UI/wrapperNarrow';

const About = () => {
  return (
    <section>
      <div className={styles['img-cont']}>
        <img src={Img} alt='' />
      </div>
      <WrapperNarrow>
        <div className={styles['text']}>
          <h2>“Muğam aləmi” Beynəlxalq Muğam Festivalı</h2>
          <div className={styles['line-break']}>
            <div className={styles['line']}></div>
            <TripleTwinkleCenter />
            <div className={styles['line']}></div>
          </div>
          <p>
            2009-cu ilin martında Bakıda Heydər Əliyev Fondunun təşəbbüsü və
            təşkilati dəstəyi ilə dünyada ilk dəfə olaraq “Muğam aləmi”
            Beynəlxalq Muğam Festivalı keçirilib.
          </p>
          <p>
            2011, 2013, 2015-ci illərdə də keçirilən festivallarda dünyanın
            müxtəlif ölkələrindən tanınmış musiqiçi və tədqiqatçılar iştirak
            edib. Festivallar çərçivəsində həm Bakıda, həm də ölkəmizin bir çox
            bölgələrində Azərbaycanın və xarici musiqiçilərin iştirakı ilə
            konsertlər keçirilib, beynəlxalq muğam müsabiqəsi, beynəlxalq elmi
            simpozium və ustad dərsləri təşkil olunub.
          </p>
        </div>
      </WrapperNarrow>
    </section>
  );
};

export default About;
