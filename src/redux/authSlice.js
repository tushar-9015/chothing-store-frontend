import { createSlice } from '@reduxjs/toolkit'

//initailize userToken from local storage
 const userToken = localStorage.getItem('userToken');

const initialState = {
  userInfo: null,
  userToken,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken')
      state.userInfo = null
      state.userToken = null
    },
    login: (state, { payload }) => {
     const {user, jwt } = payload;
     state.userInfo = user;
     state.userToken = jwt;
    }

  },
})

console.log(authSlice.getInitialState());
export const { logout, login } = authSlice.actions
export default authSlice.reducer