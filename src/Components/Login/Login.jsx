"use client"
import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Login.css";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { SignupFormDemo } from "./Loginanimation";
// import jwt_decode from "jwt-decode"; // Make sure you have this imported

const Login = ({ isDarkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warnings, setWarnings] = useState({ email: "", password: "" });
  const [isVisible, setVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordFunction = () => {
    setVisible(!isVisible);
  };

  const handleLogin = () => {
    let emailWarning = "";
    let passwordWarning = "";

    if (!email) {
      emailWarning = "*Please enter your email";
    } else if (!validateEmail(email)) {
      emailWarning = "*Please enter a valid email address!";
    }

    if (!password) {
      passwordWarning = "*Please enter your password";
    }

    setWarnings({ email: emailWarning, password: passwordWarning });

    console.log("Email warning:", emailWarning);
    console.log("Password warning:", passwordWarning);

    if (!emailWarning && !passwordWarning && email && password) {
      console.log("Logging in with email:", email);
      navigate("/explore");
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const credentialDecoded = jwt_decode(credentialResponse.credential);
    console.log("Google Login Success:", credentialDecoded);
    navigate("/explore");
  };

  const handleGoogleLoginFailure = () => {
    console.log("Login Failed");
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="login-outerContainer">
        <div className={`login-container ${isDarkMode ? 'dark-mode' : ''}`}>
          <div>
            <SignupFormDemo />
          </div>
          
          <button
            className="bg-gradient-to-br relative group/btn ..."
            type="submit"
            onClick={() => {
              console.log("Login button clicked");
              handleLogin();
            }}
          >
            Login &rarr;
            <BottomGradient />
          </button>
          
          <p>
            Forgot your password? <NavLink to="/forgot-password">Reset it here</NavLink>
          </p>
          <p>
            Don't have an account? <NavLink to="/signup">Sign up</NavLink>
          </p>
          
          <div className="googlelogin">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginFailure}
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block ..." />
      <span className="group-hover/btn:opacity-100 ..." />
    </>
  );
};

export default Login;
