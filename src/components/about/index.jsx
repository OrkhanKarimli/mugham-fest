import React from 'react';
import styles from './index.module.css';
import Wrapper from '../UI/wrapper';
const About = () => {
  return (
    <section>
      <Wrapper>
        <div className={styles['text-about']}>
          <h3>Muğam Aləmi</h3>
          <p>
            Mahnı, musiqi qədər, incəsənət, mədəniyyət qədər insanları
            bir-birinə heç nə bağlamır. İncəsənətin, mədəniyyətin, xüsusən də,
            mahnının, musiqinin oynadığı rolu heç bir vasitə oynaya bilməz.
            <span> Heydər Əliyev</span>
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
