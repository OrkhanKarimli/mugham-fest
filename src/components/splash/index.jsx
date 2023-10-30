import React, { useState,useRef,useEffect} from 'react';
import styles from './index.module.css';
import Button from '../UI/button';
import mugam from "../../music/mugam.mp3"
import { MuteIcon, VolumeIcon } from '../../icons/icons';
const Slpash = () => {
  const [splash, setSplash] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const mugamRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    mugamRef.current.play();
    setSplash(false)
  };

  const handleStop = () => {
    setIsPlaying(false);
    mugamRef.current.pause();
    mugamRef.current.currentTime = 0;
    setSplash(false)
  };
  return (
    <>
      {splash ? (
        <>
          <div className={styles['overlay']}></div>
          <div className={styles['splash']}>
            <div className={styles['content']}>
              <h1>Muğamımızı dinlə!</h1>
              <h2>
                Bunu daha sonra sayt daxilindən <br /> deaktiv edə bilərsiniz.
              </h2>
              <h3>Möhlət Müslümov - Çahargah Muğamı</h3>
              <div className={styles['buttons']}>
                <div onClick={handleStop}>
                  <Button style='transparent'>
                    <MuteIcon /> Xeyr
                  </Button>
                </div>
                <div onClick={handlePlay}>
                  <Button>
                    <VolumeIcon /> Bəli
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
       <audio ref={mugamRef} src={mugam} />
    </>
  );
};

export default Slpash;
