import React, { useState } from "react";
import "./auth.scss";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/auth";

const Register = () => {
  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!signupForm.username || !signupForm.email || !signupForm.password || !signupForm.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    // Check if passwords match
    if (signupForm.password !== signupForm.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      await register(signupForm.username, signupForm.email.toLowerCase(), signupForm.password);
      navigate("/login"); // Redirect to login after successful registration
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={submitForm} className="form">
        <h2 className="form-title">Sign Up</h2>

        {error && <p className="error-message">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={signupForm.username}
          onChange={handleChange}
          required
          className="input-field"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signupForm.email}
          onChange={handleChange}
          required
          className="input-field"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signupForm.password}
          onChange={handleChange}
          required
          className="input-field"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={signupForm.confirmPassword}
          onChange={handleChange}
          required
          className="input-field"
        />

        <button type="submit" className="form-btn" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <div className="form-footer">
          <span className="form-footer-text">Already have an account?</span>
          <Link to="/login" className="btn-link-primary" replace>
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
