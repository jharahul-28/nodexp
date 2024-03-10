import React from 'react'
import Image from 'next/image';
import style from './Section2.module.css'

function Section2() {
  return (
    <div className={style.sec2}>
        <h3>We provide various kind of</h3>
        <h3>learning module for you</h3>
        <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem</p>
        <div className={style.sec2cards}>
            <div className={style.card}>
                <Image src='/computeranimated.png' alt='computer' width={200} height={200}/>
                <h3 style={{fontSize:'24px'}}>Flexible Learning</h3>
                <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When</p>
            </div>
            <div className={style.card} id={style.card2}>
                <Image src='/computeranimated.png' alt='computer' width={200} height={200}/>
                <h3 style={{fontSize:'24px'}}>Flexible Learning</h3>
                <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When</p>
            </div>
            <div className={style.card}>
                <Image src='/computeranimated.png' alt='computer' width={200} height={200}/>
                <h3 style={{fontSize:'24px'}}>Flexible Learning</h3>
                <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When</p>
            </div>
        </div>
    </div>
  )
}

export default Section2