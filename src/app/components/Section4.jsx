import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import style from './section4.module.css'

function Section4() {
    return (
        <div className={style.sect4}>
            <h3>We completed 1200+ cetification program</h3>
            <h3>Successfully & Counting</h3>
            <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
            <div className={style.s4subSection}>
                <div className={style.s4ssContent}>
                    <FaCheckCircle className={style.icon} color='blue' />
                    <div className={style.content}>
                        <div className={style.number}>100+</div>
                        <div className={style.name}>Batch Complete</div>
                    </div>
                </div>

                <div className={style.s4ssContent}>
                    <FaClipboardCheck className={style.icon} color='blue'/>
                    <div className={style.content}>
                        <div className={style.number}>50+</div>
                        <div className={style.name}>Active Batches</div>
                    </div>
                </div>

                <div className={style.s4ssContent}>
                    <FaUsers className={style.icon} color='blue'/>
                    <div className={style.content}>
                        <div className={style.number}>10,000+</div>
                        <div className={style.name}>Students Satisfied</div>
                    </div>
                </div>

                <div className={style.s4ssContent}>
                    <FaUsers className={style.icon} color='blue'/>
                    <div className={style.content}>
                        <div className={style.number}>10+</div>
                        <div className={style.name}>Course Modules</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4