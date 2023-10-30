import React from 'react'
import painting1 from "../../assets/images/painting/painting1.png"
import painting2 from "../../assets/images/painting/painting2.png"
import painting3 from "../../assets/images/painting/painting3.png"
import { TripleTwinkleCenter } from '../../icons/icons';
import styles from './index.module.css';
const HistoryCard = () => {
  return (
<ul className={styles['card-main']}>
    <li>
     <div className={styles['grid-left']}>
       <img src={painting1} alt="" />
     </div>
     <div className={styles['grid-right']}>
       <h3>
       Muğam
       </h3>
       <span className={styles['portrait-author']}>
       Arif İ
        </span>
        <span className={styles['portrait-equipments']}>
        Sulu boya, kağız
        </span>
        <p>
        2009-cu ilin martında Bakıda Heydər Əliyev Fondunun təşəbbüsü və təşkilati dəstəyi ilə dünyada ilk dəfə olaraq “Muğam aləmi” Beynəlxalq Muğam Festivalı keçirilib. 2011, 2013, 2015-ci illərdə də keçirilən festivallarda dünyanın müxtəlif ölkələrindən tanınmış musiqiçi və tədqiqatçılar iştirak edib.
        </p>
      </div>
    </li>
    <div className={styles['line-break']}>
            <div className={styles['line']}></div>
            <TripleTwinkleCenter />
            <div className={styles['line']}></div>
          </div>
    <li>
     <div className={styles['grid-left']}>
       <img src={painting3} alt="" />
     </div>
     <div className={styles['grid-right']}>
       <h3>
       Muğam
       </h3>
       <span className={styles['portrait-author']}>
       Arif İ
        </span>
        <span className={styles['portrait-equipments']}>
        Sulu boya, kağız
        </span>
        <p>
        2009-cu ilin martında Bakıda Heydər Əliyev Fondunun təşəbbüsü və təşkilati dəstəyi ilə dünyada ilk dəfə olaraq “Muğam aləmi” Beynəlxalq Muğam Festivalı keçirilib. 2011, 2013, 2015-ci illərdə də keçirilən festivallarda dünyanın müxtəlif ölkələrindən tanınmış musiqiçi və tədqiqatçılar iştirak edib.
        </p>
      </div>
    </li>
    <div className={styles['line-break']}>
            <div className={styles['line']}></div>
            <TripleTwinkleCenter />
            <div className={styles['line']}></div>
          </div>
    <li>
     <div className={styles['grid-left']}>
       <img src={painting2} alt="" />
     </div>
     <div className={styles['grid-right']}>
       <h3>
       Muğam
       </h3>
       <span className={styles['portrait-author']}>
       Arif İ
        </span>
        <span className={styles['portrait-equipments']}>
        Sulu boya, kağız
        </span>
        <p>
        2009-cu ilin martında Bakıda Heydər Əliyev Fondunun təşəbbüsü və təşkilati dəstəyi ilə dünyada ilk dəfə olaraq “Muğam aləmi” Beynəlxalq Muğam Festivalı keçirilib. 2011, 2013, 2015-ci illərdə də keçirilən festivallarda dünyanın müxtəlif ölkələrindən tanınmış musiqiçi və tədqiqatçılar iştirak edib.
        </p>
      </div>
    </li>
    <div className={styles['line-break']}>
            <div className={styles['line']}></div>
            <TripleTwinkleCenter />
            <div className={styles['line']}></div>
          </div>
</ul>
  )
}

export default HistoryCard