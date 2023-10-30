import React from 'react'
import WrapperNarrow from '../../components/UI/wrapperNarrow';
import HistoryCard from '../../components/historyCard';
import styles from './index.module.css';

const History = () => {
  return (
    <section className={styles['article']}>
    <WrapperNarrow>
        <div className={styles['text']}>
             <h2>
        Muğamımızın tarixi
        </h2>
        <p>
        2009-cu ilin martında Bakıda Heydər Əliyev Fondunun təşəbbüsü və təşkilati dəstəyi ilə dünyada ilk dəfə olaraq  “Muğam aləmi” Beynəlxalq Muğam Festivalı keçirilib. 2011, 2013, 2015-ci illərdə də keçirilən festivallarda dünyanın müxtəlif ölkələrindən tanınmış musiqiçi və tədqiqatçılar iştirak edib. Festivallar çərçivəsində həm Bakıda, həm də ölkəmizin bir çox bölgələrində Azərbaycanın və xarici musiqiçilərin iştirakı ilə konsertlər keçirilib, beynəlxalq muğam müsabiqəsi, beynəlxalq elmi simpozium və ustad dərsləri təşkil olunub.
        </p>   
        </div>
    <HistoryCard/>
    </WrapperNarrow>
    </section>
  )
}

export default History