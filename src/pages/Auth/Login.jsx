import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./auth.scss";
import { login } from "../../services/auth.js";
import  * as authSlice from '../../redux/authSlice.js'

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  const userToken = useSelector((state) => state.auth.userToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    const { name, value } = event.target;
    setLoginForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await login(loginForm.email, loginForm.password);
      dispatch(authSlice.login(data)); // Dispatch login action with API response
      navigate("/"); // Redirect on success
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Redirect authenticated user to home if already logged in
  useEffect(() => {
    if (userToken) {
      navigate("/");
    }
  }, [navigate, userToken]);

  return (
    <div className="form-container">
      <form onSubmit={submitForm} className="form">
        <h2 className="form-title">Login</h2>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={loginForm.email}
            onChange={handleUpdate}
            required
            className="input-field"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginForm.password}
            onChange={handleUpdate}
            required
            className="input-field"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="form-btn" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="form-footer">
          <span className="form-footer-text">Don't have an account?</span>
          <Link to="/signup" onClick={(e) => e.stopPropagation()} className="btn-link-primary" replace>
            Create One
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
