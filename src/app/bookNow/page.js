'use client'
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setRegistered } from '../userInputSlice';
import Link from 'next/link';
import { Provider } from 'react-redux';
import { useSelect } from '@nextui-org/react';

import { useRouter } from 'next/navigation';
// import { store } from 'path/to/your/store'; 

export default function FormPropsTextFields() {
    const dispatch = useDispatch();
    const router = useRouter();
    const data=useSelector((state)=>state.userInput)
    console.log(data)
  
    const handleNameChange = (event) => {
      dispatch(setName(event.target.value));
      console.log(event.target.value)
    };
  
    const handleEmailChange = (event) => {
      dispatch(setEmail(event.target.value)); 
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();

    };
    const handleClick=(ele)=>{
      ele.preventDefault();
      dispatch(setRegistered(true));
      router.push('/');
    }
  
    return (
      // <Provider store={store}>
      <Box
        component="form"
        onSubmit={handleSubmit} 
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue={data.name}
            onChange={handleNameChange} 
          />
          <TextField
            required
            id="outlined-email"
            label="Email"
            defaultValue={data.email}
            onChange={handleEmailChange} 
          />
          <TextField id="outlined-search" type="date" />
        </div>
        {/* <Link href='/'> */}
          <Button type="submit" variant="contained" onClick={handleClick}>Submit</Button> 
          {/* </Link>  */}
      </Box>
      // </Provider>
    );
  }  