import { createSlice } from '@reduxjs/toolkit'
import { registerUser, userLogin } from './authAction'

//initailize userToken from local storage
 const userToken = localStorage.getItem('userToken');

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken')
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },

  },
  extraReducers: {

    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      const {user, jwt} = payload
      state.userInfo = user
      state.userToken = jwt
      state.loading = false
      state.success = true 
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    // register user
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const {user, jwt} = payload
      state.userInfo = user
      state.userToken = jwt
      state.loading = false
      state.success = true // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

console.log(authSlice.getInitialState());
export const { logout } = authSlice.actions
export default authSlice.reducer