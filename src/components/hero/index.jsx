import React from 'react';
import styles from './index.module.css';
import Wrapper from '../UI/wrapper';
import Button from '../UI/button';
import HeroImg from '../../assets/images/hero.png';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  YoutubeIcon,
} from '../../icons/icons';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className={styles['hero']}>
      <Wrapper>
        <div className={styles['jumbo-text']}>
          <div>
            <div className={styles['texts']}>
              <h3>6-cı beynəlxalq musiqi festivalı</h3>
              <h1>“Muğam Aləmi”</h1>
              <h2>18-25 iyun 2023</h2>
            </div>
            <div className={styles['socials']}>
              <Link to={''}>
                <FacebookIcon />
              </Link>
              <Link to={''}>
                <InstagramIcon />
              </Link>
              <Link to={''}>
                <LinkedinIcon />
              </Link>
              <Link to={''}>
                <YoutubeIcon />
              </Link>
              <Link to={''}>
                <TelegramIcon />
              </Link>
            </div>
          </div>
          <div className={styles['button']}>
            <Link to={''}>Ətraflı məlumat</Link>
            <Link to={''}>Bilet al</Link>
          </div>
        </div>
      </Wrapper>
      <div className={styles['hero-image']}>
        <img src={HeroImg} alt='Hero' />
      </div>
    </section>
  );
};

export default Hero;
