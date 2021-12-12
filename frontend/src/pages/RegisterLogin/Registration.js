import React from "react";
import { useState } from "react";
import validation from "./validation";
import LoginRegNav from "./LoginRegNav";
export const Registration = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Student",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setErrors(validation(values));

    let item = { values };
    console.warn(item);

    let result = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({...item.values}),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    result = await result.json();
    console.warn("result", result);
  };
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
                <div className="account-type">
                  <label for="idRegisterCan">
                    <input id="idRegisterCan" type="radio" name="register" />
                    <span>Student</span>
                  </label>
                  <label for="idRegisterEmp">
                    <input id="idRegisterEmp" type="radio" name="register" />
                    <span>Company</span>
                  </label>
                </div>

                <form action="#">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={values.email}
                      onChange={handleChange}
                      className="form-control"
                    />
                    <p style={{ color: "red" }}>{errors.email} </p>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="username"
                      value={values.name}
                      onChange={handleChange}
                      className="form-control"
                    />
                    <p style={{ color: "red" }}>{errors.name} </p>
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      className="form-control"
                    />
                    <p style={{ color: "red" }}>{errors.password} </p>
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder=" Confirm Password"
                      className="form-control"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      className="form-control"
                    />
                    <p style={{ color: "red" }}>{errors.confirmPassword} </p>
                  </div>

                  <div className="more-option terms">
                    <div className="mt-0 terms">
                      <input
                        className="custom-radio"
                        type="checkbox"
                        id="radio-4"
                        name="termsandcondition"
                        unchecked
                      />
                      <label for="radio-4">
                        <span className="dot"></span>I accept the{" "}
                        <a href="#">terms & conditions</a>
                      </label>
                    </div>
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
