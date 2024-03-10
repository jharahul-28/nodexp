import React, { useState } from 'react'
import style from './Section3.module.css'

function Section3() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = document.getElementById('your-video');
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className={style.sec3}>
      <h3>Why Us</h3>
      <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
      <div className={style.s3content}>
        <div className={style.left}>
          <video id="your-video" width="480" height="270" controls>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={handlePlayPause}>
            {isPlaying}
          </button>
        </div>
        <div className={style.right}>
          <h3>Crafting your dream career:</h3>
          <h3>Building a path you love with us</h3>
          <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
          <p>Our platofrm is designed to empower thinkers like you to excl in today's dynamic world.</p>
          <button>Get More</button>
        </div>
      </div>
    </div>
  )
}

export default Section3