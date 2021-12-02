import React, { useState, useEffect } from "react";
import LoginRegNav from "./LoginRegNav";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 8
      );
    }, 500);
    return () => {
      console.log("Clean Up!");
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 8);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <div>
      <LoginRegNav title="Login" />
      <div className="padding-top-90 padding-bottom-90 access-page-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="access-form">
                <div className="form-header">
                  <h5>
                    <i data-feather="user"></i>Sign In
                  </h5>
                </div>
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      value={enteredEmail}
                      onChange={emailChangeHandler}
                      onBlur={validateEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={enteredPassword}
                      onChange={passwordChangeHandler}
                      onBlur={validatePasswordHandler}
                    />
                  </div>
                  <div className="more-option">
                    <div className="mt-0 terms">
                      <input
                        className="custom-radio"
                        type="checkbox"
                        id="radio-4"
                        name="termsandcondition"
                      />
                      <label for="radio-4">
                        <span className="dot"></span> Are you a previous user?
                      </label>
                    </div>
                    <a href="#">Forget Password?</a>
                  </div>
                  <button
                    className="button primary-bg btn-block"
                    type="submit"
                    disabled={!formIsValid}
                  >
                    Login
                  </button>
                </form>
                <div className="shortcut-login">
                  <p>
                    Don't have an account? <a href="register.html">Register</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
