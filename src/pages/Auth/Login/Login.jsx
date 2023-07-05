import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../../redux/authAction';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const { loading, userToken, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch() 

  const handleUpdate = (event) => {
    const { name, value } = event.target;
    setLoginForm((pervFormData) => ({ ...pervFormData, [name]: value}));
  };

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(userLogin( {email: loginForm.email, password: loginForm.password }))
  }
 
  const navigate = useNavigate()

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userToken) {
      navigate('/')
    }
  }, [navigate, userToken])
 

  return (
    <div className='login'>
     <div className="wrapper">
      <form onSubmit={e => submitForm(e)}>
        <label>Email:
          <input type='email' name='email' placeholder='xyz@gmail.com' required value={loginForm.email} onChange={handleUpdate}/>
        </label>
        <label>Password:
          <input type='password' name='password' value={loginForm.password} required onChange={handleUpdate} />
        </label>
        <button type='submit' className='btn' disabled={loading}>Login</button>
      </form>
     </div>
    </div>
  )
}

export default Login
