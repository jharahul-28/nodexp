import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from './modalSlice';
import { setName, setEmail } from '../userInputSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);

  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    // Dispatch actions to update Redux store with form data
    dispatch(closeModal());
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <div style={{ background: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
        <div style={{ background: '#fff', padding: '20px', width: '300px', margin: '100px auto' }}>
          <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth onChange={handleNameChange} />
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth onChange={handleEmailChange} />
          <Button variant="contained" fullWidth onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
