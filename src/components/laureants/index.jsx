import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import Button from '../UI/button';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import data from "./data.json"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowRightDarkIcon, IconNext } from '../../icons/icons';
import images from './images';
const years = [
  {
    year: '2009',
  },
  {
    year: '2011',
  },
  {
    year: '2013',
  },
  {
    year: '2015',
  },
  {
    year: '2018',
  },

  {
    year: '2023',
  },
];
const Laureants = () => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const handlePrevClick = () => {
    slider1.current.slickPrev();
    slider2.current.slickPrev();
    if (isActive > 0) {
      toggle(isActive - 1);
    }
  };
  const handleNextClick = () => {
    slider1.current.slickNext();
    slider2.current.slickNext();
    if (isActive < years.length - 1) {
      toggle(isActive + 1);
    }
  };
  const handleItemClick = (index) => {
    slider2.current.slickGoTo(index);
    setActive(index);
  };
  const [isActive, setActive] = useState(null);
  const toggle = (index) => {
    setActive(index);
  };
  const [width, setwidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  var controls = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <section className={styles['laureants-main']}>
      <div className={styles['custom-wrapper']}>
        <div className={styles['content-laureants']}>
          <div className={styles['title']}>
            <h3>KEÇMİŞ LAUREATLAR</h3>
            <div className={styles['line']}></div>
          </div>
          <ul>
            <Slider swipe={true} arrows={false} ref={slider1} {...controls}>
              {years.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleItemClick(index)}
                  className={
                    isActive == index
                      ? styles['foreground']
                      : styles['yearstyle']
                  }>
                  {item.year}
                </li>
              ))}
            </Slider>
          </ul>
        </div>
        <Slider swipe={false} arrows={false} ref={slider2} {...settings}>
          {data.map((item, index) => (
            <div className={styles['slider-laureants-main']} key={index}>
              <div className={styles['slider-laureants-info']}>
                <h3>{item.head}</h3>
                <p>
               {item.info}
                </p>
                <Button>
                  Ətraflı <ArrowRightDarkIcon />
                </Button>
              </div>

              <motion.div ref={carousel} className={styles['carousel']}>
                <motion.div
                  drag='x'
                  dragConstraints={{ right: 0, left: -width }}
                  className={styles['inner-carousel']}>
                  {images.map((image, index) => {
                    return (
                      <motion.div className={styles['item']} key={index}>
                        <img src={image} alt='sliderimage' />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </Slider>
        <div onClick={handleNextClick} className={styles['next-icon']}>
          <IconNext />
        </div>
        <div onClick={handlePrevClick} className={styles['prev-icon']}>
          <IconNext />
        </div>
      </div>
    </section>
  );
};

export default Laureants;
