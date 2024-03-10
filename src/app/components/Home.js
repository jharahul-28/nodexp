import Navbar from './Navbar'
import Image from 'next/image'
import style from './Home.module.css'
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';

function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [user, setUser] = useState(null)


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
    <div className={style.home}>
        <Image src='/studingStudent.jpg' alt='Student is studying' layout='fill' objectFit='cover' className={style.homeimg} />
        <div className={style.homeContent}>
            <Navbar/>
            <div className={style.sec3}>
                <div className={style.s3content}>
                    <div className={style.right}>
                        <h3>Crafting your dream career:</h3>
                        <h3>Building a path you love with us</h3>
                        <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
                        <p>Our platofrm is designed to empower thinkers like you to excl in today's dynamic world.</p>
                        <span>
                            <Link href="/bookNow"><Button>Book Demo Now</Button></Link>
                            <span className={style.button2}>Explore More</span> 
                        </span>
                    </div>
                    <div  className={style.left}>
                        <video id="your-video" width="480" height="270" controls>
                            <source src="/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button onClick={handlePlayPause}>
                            {isPlaying}
                        </button>
                    </div>
                </div>
                <svg className={style.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"> <path fill="#ffffff" fill-opacity="1" d="M0,64L48,64C96,64,192,64,288,64C384,64,480,64,576,90.7C672,117,768,171,864,186.7C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </div>
    </div>
  )
}

export default Home