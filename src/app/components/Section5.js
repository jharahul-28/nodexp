import React from 'react'
import style from './Section5.module.css'
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
function Section5() {
  return (
    <div className={style.sec5}>
        <div className={style.top}>
            <div className={style.left}>
                <h3>Our Student Feedback</h3>
                <p style={{color: '#757575'}}>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
            </div>
            <div className={style.right}>
                <button><p>Read More <FaLongArrowAltRight /></p></button>
            </div>
        </div>
        <div className={style.content}>
            <Image src='/student.jpg' alt='Student' width={300} height={200}></Image>
            <div className={style.innerContent}>
                <p className={style.star}><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <p className={style.para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt recusandae in voluptates! Maiores tempora excepturi officiis, eaque deleniti quo est, iste minima aliquam odit praesentium distinctio, delectus similique facere laudantium.</p>
                <p className={style.studentName}>Riad Islam</p>
                <div className={style.studentPost}>Product Manager <span>@learning.com</span></div>
            </div>
        </div>
    </div>
  )
}

export default Section5