/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

const Authentication = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    fullname: "",
    email: "",
    password: "",
    number: "",
    search: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    email: "",
    number: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    number: false,
    password: false,
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update state
    setState((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));

    // Check email error before proceeding

    // Validate email
    if (name === "email") {
      if (!value.endsWith("@gmail.com")) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Please enter a valid email address ending with @gmail.com.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "", // Clear the error when condition is met
        }));
      }
    }

    // Validate password
    if (name === "password") {
      if (value.trim().length < 11) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must be at least 11 characters.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "", // Clear the error when condition is met
        }));
      }
    }
  };

  const [isLogin, setIsLogin] = useState(false);

  const handleClickSwitch = (event) => {
    event.preventDefault();
    setState({
      fullname: "",
      email: "",
      password: "",
      number: "",
      search: "",
    });
    setErrors({
      password: "",
      email: "",
      number: "",
    });
    setTouched({
      email: false,
      number: false,
      password: false,
    });
    setShowSuccessAlert(false);
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Track that the user has tried to submit the form
    setTouched({
      email: true,
      number: true,
      password: true,
    });

    // Check email error before proceeding

    if (!state.email.endsWith("@gmail.com")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address ending with @gmail.com.",
      }));
      return;

      // Prevent form submission if email validation fails
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "", // Clear the error when condition is met
      }));
    }

    // Check password error before proceeding
    if (state.password.trim().length < 11) {
      return; // Prevent form submission if password validation fails
    }

    // Handle form submission
    if (isLogin) {
      console.log("Login submitted");
      console.log("Email:", state.email);
      console.log("Password:", state.password);
    } else {
      console.log("Sign Up submitted");
      console.log("Full Name:", state.fullname);
      console.log("Phone Number:", state.number);
      console.log("Email:", state.email);
      console.log("Password:", state.password);
    }

    setState({
      fullname: "",
      email: "",
      password: "",
      number: "",
    });

    // Optionally, clear errors and touched states
    setErrors({
      password: "",
      email: "",
      number: "",
    });
    setTouched({
      email: false,
      number: false,
      password: false,
    });
    setShowSuccessAlert(true);
    setTimeout(() => {
      navigate("/"); // Adjust the path to your homepage route
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  return (
    <div className="authentication">
      <form onSubmit={handleSubmit}>
        {showSuccessAlert && !isLogin && (
          <Alert severity="success">
            Thank you. You've registered successfully, Please wait......
          </Alert>
        )}
        {showSuccessAlert && isLogin && (
          <Alert severity="success">
            You've successfully logged in, Please wait......
          </Alert>
        )}
        {isLogin ? <h1>Login</h1> : <h1>Register</h1>}
        {!isLogin && (
          <div>
            <div className="form-control">
              <label htmlFor="fullname">Full Name</label>
              <br />
              <input
                type="text"
                autoComplete="off"
                name="fullname"
                id="fullname"
                value={state.fullname}
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="number">Phone Number</label>
              <br />
              <input
                type="tel"
                name="number"
                autoComplete="off"
                id="number"
                value={state.number}
                maxLength={11}
                minLength={11}
                required
                onChange={handleInputChange}
              />
              {touched.number && errors.number && (
                <p className="error">{errors.number}</p>
              )}
            </div>
          </div>
        )}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={state.email}
            required
            onChange={handleInputChange}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
          />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            autoComplete="off"
            id="password"
            value={state.password}
            required
            onChange={handleInputChange}
            onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
          />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>

        <div className="form-actions">
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </div>
        {isLogin ? (
          <div className="existing">
            <a href="#!" onClick={handleClickSwitch}>
              Don't yet have an account? Sign Up
            </a>
          </div>
        ) : (
          <div className="existing">
            <a href="#!" onClick={handleClickSwitch}>
              Already have an account? Login
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

export default Authentication;
