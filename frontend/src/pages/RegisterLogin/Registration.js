import React from 'react'
import LoginRegNav from './LoginRegNav';
export const Registration = () => {
    return (
        <div>
        <LoginRegNav title="Register" />
    <div class="padding-top-90 padding-bottom-90 access-page-bg">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-md-6">
            <div class="access-form">
              <div class="form-header">
                <h5><i data-feather="edit"></i>Register Account</h5>
              </div>
              <div class="account-type">
                <label for="idRegisterCan">
                  <input id="idRegisterCan" type="radio" name="register"/>
                  <span>Student</span>
                </label>
                <label for="idRegisterEmp">
                  <input id="idRegisterEmp" type="radio" name="register"/>
                  <span>Company</span>
                </label>
              </div>
              <form action="#">
                <div class="form-group">
				<div class="form-group">
                  <input type="email" placeholder="Email Address" class="form-control"/>
                </div>
                  <input type="text" placeholder="name" class="form-control"/>
                </div>
                
                <div class="form-group">
                  <input type="password" placeholder="Password" class="form-control"/>
                </div>
				<div class="form-group">
                  <input type="password" placeholder=" Confirm Password" class="form-control"/>
                </div>
                <div class="more-option terms">
                  <div class="mt-0 terms">
                    <input class="custom-radio" type="checkbox" id="radio-4" name="termsandcondition" unchecked/>
                    <label for="radio-4">
                      <span class="dot"></span> I accept the <a href="#">terms & conditions</a>
                    </label>
                  </div>
                </div>
                <button class="button primary-bg btn-block">Register</button>
              </form>
              
                <p>Already have an account? <a href="login.html">Login</a></p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
 
        </div>
    )
}
export default Registration;
