import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../../redux/authAction'
import './register.scss'
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

  const dummyData = {
    username: "John",
    email: "janeCena@gmail.com",
    password: "john1234",
    confirmPassword: "john1234",
  };

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
    <div className='signup'>
        <div className="wrapper">
            <h1>SignUp</h1>
            <form onSubmit={e => submitForm(e)}>
          <div className="form-body">
              <label>UserName:
                <input type='text' name='username' placeholder='tushar' value={signupForm.username} onChange={handleChange} required />
              </label>
              <label>Email:
                <input type='email' name='email' placeholder='xyz@gmail.com' value={signupForm.email} onChange={handleChange} required />
              </label>
              <label>Password:
                <input type='password' name='password' value={signupForm.password} onChange={handleChange} required />
              </label>
              <label>ConfirmPassword:
                <input type='password' name='confirmPassword'  value={signupForm.confirmPassword} onChange={handleChange} required />
              </label>
              <button type="submit" className="btn" disabled={loading} >Register</button>
          </div>
      </form>   
        </div>
      
    </div>
  )
}

export default Register
