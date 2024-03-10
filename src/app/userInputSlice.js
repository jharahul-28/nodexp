import { createSlice } from '@reduxjs/toolkit';

const userInputSlice = createSlice({
  name: 'userInput',
  initialState: {
    name: '',
    email: '',
    isRegistered: false,
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
      console.log(action);
      console.log(state.name);
    },
    setEmail(state, action) {
      state.email = action.payload;
      console.log(action)
      console.log(state.email);
    },
    setRegistered: (state, action) => {
      state.isRegistered = action.payload;
    },
  },
});

export const { setName, setEmail, setRegistered } = userInputSlice.actions;

export default userInputSlice.reducer;
