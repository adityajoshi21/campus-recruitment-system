import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import { login } from '../../actions/userActions'
import LoginRegNav from "./LoginRegNav";

const Login = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const {error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }


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
                {error && <Message variant='danger'>{error}</Message>}
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <input
                      class="form-control"
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      
                    />
                  </div>
                  <div className="form-group">
                    <input
                      class="form-control"
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
