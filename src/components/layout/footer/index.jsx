import React from 'react';
import styles from './index.module.css';
import Wrapper from '../../../components/UI/wrapper';
import Logo from '../../../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  YoutubeIcon,
} from '../../../icons/icons';
import Application from '../../application';
const Footer = () => {
  return (
    <>
      <footer className={styles['footer']}>
        <Wrapper>
          <div className={styles['upper-footer']}>
            <div className={styles['left-footer']}>
              <Link to={'/'}>
                <img src={Logo} alt='mugham_alemi_logo' />
              </Link>
              <p>
                Heydər Əliyev Fondunun təşəbbüsü ilə iyunun 18-25-də “Muğam
                aləmi” (“Space of Mugam”) 6-cı Beynəlxalq Musiqi Festivalı
              </p>
            </div>
            <div className={styles['right-footer']}>
              <ul>
                <li>Company</li>
                <li>
                  <Link>Bloq</Link>
                </li>
                <li>
                  <Link>Career</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>FAQs</Link>
                </li>
              </ul>
              <ul>
                <li>Company</li>
                <li>
                  <Link>Bloq</Link>
                </li>
                <li>
                  <Link>Career</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>FAQs</Link>
                </li>
              </ul>
              <ul>
                <Application />
              </ul>
            </div>
          </div>
          <div className={styles['lower-footer']}>
            <div className={styles['socials']}>
              <h5>Sosial şəbəkədə bizi izləyin</h5>
              <div>
                <Link>
                  <FacebookIcon />
                </Link>
                <Link>
                  <InstagramIcon />
                </Link>
                <Link>
                  <LinkedinIcon />
                </Link>
                <Link>
                  <TelegramIcon />
                </Link>
                <Link>
                  <YoutubeIcon />
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </footer>
      <div className={styles['rights']}>
        <p>2023. Mugam Alemi. Bütün hüquqlar qorunur.</p>
      </div>
    </>
  );
};

export default Footer;
