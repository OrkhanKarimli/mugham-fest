import React from 'react';
import Wrapper from '../../UI/wrapper';
import styles from './index.module.css';
import Logo from '../../../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import { MuteIcon, SearchIcon } from '../../../icons/icons';
import Button from '../../UI/button';

const Header = () => {
  return (
    <header>
      <nav className={styles['nav']}>
        <Wrapper>
          <div className={styles['content']}>
            <Link to={'/'}>
              <img src={Logo} alt='mugham_alemi_logo' />
            </Link>
            <ul>
              <li>
                <Link>Əsas</Link>
              </li>
              <li className={styles['dropdown']}>
                <button className={styles['dropbtn']}>Müsabiqə</button>
                <div className={styles['dropdown-content']}>
                  <Link>Müsabiqəyə qoşul</Link>
                  <Link>İştirakçı ölkələr</Link>
                  <Link>Müsabiqə komissiyası</Link>
                  <Link>Qaydalar və şərtlər</Link>
                  <Link>Qarşıdakı hadisələr</Link>
                </div>
              </li>
              <li>
                <Link>Qaydalar</Link>
              </li>
              <li>
                <Link>Media</Link>
              </li>
              <li>
                <Link>Keçmiş laureatlar</Link>
              </li>
              <li>
                <Link to={'/about'}>Haqqımızda</Link>
              </li>
            </ul>
            <div className={styles['right-bar']}>
              <div>
                <SearchIcon />
              </div>
              <div>
                <MuteIcon />
              </div>
              <div className={styles['dropdown-lang']}>
                AZ
                <ul className={styles['dropdown-menu']}>
                  <li>AZ</li>
                  <li>EN</li>
                  <li>RU</li>
                </ul>
              </div>
              <Button>Qeydiyyat</Button>
            </div>
          </div>
        </Wrapper>
      </nav>
    </header>
  );
};

export default Header;
