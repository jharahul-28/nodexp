import React, { useState } from 'react';
import style from './Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Section1 from './Section1';
import Link from 'next/link';
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  const [showForm, setShowForm] = useState(false);
  let isRegistered = useSelector((state) => state.userInput.isRegistered);
  const data = useSelector((state) => state.userInput)
  console.log(data)

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={style.nav}>
      <p>Learning Exp.</p>
      <div className={style.floatRight}>
        <ul>
          <li>Home</li>
          <li>Services Us</li>
          <li>Why Us</li>
          <li>Our Goal</li>
          <li><Button className={style.button} onClick={toggleForm}>Contact Us</Button></li>

          {
            isRegistered ? (
              <span className={style.register}>
                <FaRegUserCircle />
                <p>{data.name}</p>
              </span>
            ) : (
              <Link href="/bookNow"><button>Register</button></Link>
            )
          }

        </ul>
      </div>
      {showForm && <Section1 />}
    </div>
  );
}

export default Navbar;