import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName, setEmail } from '../userInputSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from './Section1.module.css'

function Section1() {
  const dispatch = useDispatch();
  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
    
  };

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setRegistered(true)); 
  };
  return (
    <div className={style.sec1}>
      <form>
          <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth onChange={handleNameChange} />
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth onChange={handleEmailChange} />
          <Button variant="contained"  fullWidth>Submit</Button>
        </form>
    </div>
  )
}

export default Section1