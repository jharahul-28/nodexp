import React from 'react'
import style from './Footer.module.css'
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaPinterestP } from "react-icons/fa";

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.upper}>
                <div className={style.left}>
                    <p className={style.contact}>Contact Us!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt assumenda nostrum repellat labore inventore libero.</p>
                </div>
                <div className={style.right}>
                    <div className={style.ip}>
                        <input type="text" placeholder='Enter Here'/> 
                        <button>Send</button>
                    </div>
                </div>
            </div>
            <div className={style.lower}>
                <div className={style.col} id={style.col1}>
                    <div className={style.companyName}>Learning Exp</div>
                    <div className={style.social}>
                        <CiFacebook className={style.icons}/> 
                        <TiSocialTwitterCircular className={style.icons}/>
                        <TiSocialLinkedinCircular className={style.icons}/>
                        <FaPinterestP className={style.icons}/>
                    </div>
                </div>
                <div className={style.col} id={style.col2}>
                    <p>Links</p>
                    <ul>
                        <li>Home</li>
                        <li>Pricing</li>
                        <li>Download</li>
                        <li>About</li>
                        <li>Service</li>
                    </ul>
                </div>
                <div className={style.col} id={style.col3}>
                    <p>Support</p>
                    <ul>
                        <li>FAQ</li>
                        <li>How It</li>
                        <li>Features</li>
                        <li>Contact</li>
                        <li>Reporting</li>
                    </ul>
                </div>
                <div className={style.col} id={style.col4}>
                    <p>Contact Us</p>
                    <ul>
                        <li>+880 12345678</li>
                        <li>youremail@gmail.com</li>
                        <li>Pune City</li>
                    </ul>
                </div>
            </div>
            <div className={style.foot}>
                <div className={style.fleft}>
                    <p>Copyright and Design by @Learning Exp.</p>
                </div>
                <div className={style.fright}>
                    <span className={style.footbod}>Terms of Use</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}

export default Footer