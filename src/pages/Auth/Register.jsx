import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/authAction'
import "./auth.scss";
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  
  const { loading, userToken, error, success } = useSelector(
    (state) => state.auth
  )

  const dispatch = useDispatch()


  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitForm = (e) => {
    console.log(e);
    // check if passwords match
    e.preventDefault()
     if (signupForm.password !== signupForm.confirmPassword) {
      alert('Password mismatch')
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    signupForm.email = signupForm.email.toLowerCase()
    dispatch(registerUser({username: signupForm.username, email:  signupForm.email, password: signupForm.password}))
    
  }

  const navigate = useNavigate()

  useEffect(() => {
    // redirect user to login page if registration was successful
    // if (success) navigate('/login')
    console.log(success);
    // redirect authenticated user to profile screen
    if(userToken) navigate('/')
  }, [navigate, userToken, success])

  return (
    <div className="form-container">
      <form onSubmit={e => submitForm(e)} className="form">
        <h2 className="form-title">SignUp</h2>
        <input
          type="text"
          name="username"
          placeholder='username'
          value={signupForm.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder='email'
          value={signupForm.email}
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder='password'
          value={signupForm.password}
          onChange={handleChange}
        />
        <input
          name="confirmPassword"
          placeholder='confirmPassword'
          value={signupForm.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit" className="form-btn">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Register
