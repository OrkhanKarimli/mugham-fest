import React from 'react'
import styles from "./index.module.css"
import Wrapper from '../UI/wrapper'
const Count = () => {
  return (
    <section>
        <Wrapper>
            <div className={styles['text-count']}>
                <ul>
                    <li>
                        <h4>25+</h4>
                        <p>Ölkə</p>
                    </li>
                    <li>
                        <h4>500+</h4>
                        <p>İştirakçı</p>
                    </li>
                    <li>
                        <h4>50+</h4>
                        <p>Münsif</p>
                    </li>
                </ul>
            </div>
        </Wrapper>
    </section>
  )
}

export default Count