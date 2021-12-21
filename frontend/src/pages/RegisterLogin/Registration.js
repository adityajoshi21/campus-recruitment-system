import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'

import { register } from '../../actions/userActions'

import LoginRegNav from "./LoginRegNav";
export const Registration = ({location,history}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role,setRole]=useState(' ')
  const [message, setMessage] = useState(null)

   const dispatch = useDispatch()

   const userRegister = useSelector(state => state.userRegister)
   const { error, userInfo } = userRegister

  
  const redirect = location.search ? location.search.split('=')[1] : '/'
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password,confirmPassword,role))
    }
  }
  return (
    <div>
      <LoginRegNav title="Register" />

      <div className="padding-top-90 padding-bottom-90 access-page-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="access-form">
                <div className="form-header">
                  <h5>
                    <i data-feather="edit"></i>Register Account
                  </h5>
                </div>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                <div className="account-type">
                  <label for="idRegisterCan">
                    <input id="idRegisterCan" type="radio" name="role" value="Student" onChange={(e) => setRole(e.target.value)} />
                    <span>Student</span>
                  </label>
                  <label for="idRegisterEmp">
                    <input id="idRegisterEmp" type="radio" name="role" value="Company"  onChange={(e) => setRole(e.target.value)} />
                    <span>Company</span>
                  </label>
                </div>

                <form action="#">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                   
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="username"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    />
                   
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                    
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder=" Confirm Password"
                      className="form-control"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control"
                    />
                    
                  </div>

                  
                  <button
                    className="button primary-bg btn-block"
                    onClick={handleFormSubmit}
                  >
                    Register
                  </button>
                </form>

                <p>
                  Already have an account? <a href="login.html">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
