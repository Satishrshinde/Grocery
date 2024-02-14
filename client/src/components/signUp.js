import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signUp.css"

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [ageErr, setAgeErr] = useState(false);
  const [mobileNumberErr, setMobileNumberErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [inputPassword, setInputPassword] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchErr, setPasswordMatchErr] = useState(false);
  const navigate = useNavigate();

  function resetForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setAge("");
    setMobileNumber("");
    setPassword("");
    setFirstNameErr(false);
    setLastNameErr(false);
    setEmailErr(false);
    setAgeErr(false);
    setMobileNumberErr(false);
    setPasswordErr(false);
    setConfirmPassword("");
    setPasswordMatchErr(false);
  }

  function showPassword() {
    if (inputPassword === "password") {
      setInputPassword("text");
    } else {
      setInputPassword("password");
    }
  }

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (firstName === "") {
      setFirstNameErr(true);
    } else {
      setFirstNameErr(false);
    }
    if (lastName === "") {
      setLastNameErr(true);
    } else {
      setLastNameErr(false);
    }
    if (email === "") {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (age === "") {
      setAgeErr(true);
    } else {
      setAgeErr(false);
    }
    if (mobileNumber === "" || mobileNumber.length < 10) {
      setMobileNumberErr(true);
    } else {
      setMobileNumberErr(false);
    }
    if (password === "" || password.length < 8) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    if (password !== confirmPassword) {
      setPasswordMatchErr(true);
    } else {
      setPasswordMatchErr(false);
    }
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      isValidEmail &&
      age !== "" &&
      mobileNumber !== "" &&
      mobileNumber.length === 10 &&
      password !== "" &&
      password.length > 8 &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      navigate("/login");
      // window.location.href = "/"; we can use this method as well but we dont to reload page in react
    }
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="signupContainer mx-auto">
        <h1 className="text-center">Registration Form</h1>
        <div>
          <div className="form-group row">
            <label htmlFor="first name" className="col-sm-3 col-form-label">
              First name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className={`form-control ${firstNameErr ? "redBorder" : ""}`}
                placeholder="first name"
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
              />
              {firstNameErr && <span className="text-danger">first name should not be empty</span>}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="last name" className="col-sm-3 col-form-label">
              Last name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className={`form-control ${lastNameErr ? "redBorder" : ""}`}
                placeholder="last name"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
              />
              {lastNameErr && <span className="text-danger">Last name should not be empty</span>}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="emailid" className="col-sm-3 col-form-label">
              Email id
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className={`form-control ${emailErr ? "redBorder" : ""}`}
                placeholder="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              {emailErr && <span className="text-danger">enter valid email address</span>}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="age" className="col-sm-3 col-form-label">
              Age
            </label>
            <div className="col-sm-9">
              <input
                type="number"
                className={`form-control ${ageErr ? "redBorder" : ""}`}
                placeholder="your age"
                value={age}
                onChange={event => {
                  if (event.target.value.length > 2) {
                    event.preventDefault();
                  } else {
                    setAge(event.target.value);
                  }
                }}
              />
              {ageErr && <span className="text-danger">age should not be empty </span>}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="mobile number" className="col-sm-3 col-form-label">
              Mobile number
            </label>
            <div className="col-sm-9">
              <input
                type="number"
                className={`form-control ${mobileNumberErr ? "redBorder" : ""}`}
                placeholder="mobile number"
                value={mobileNumber}
                onChange={event => {
                  if (event.target.value.length > 10) {
                    event.preventDefault();
                  } else {
                    setMobileNumber(event.target.value);
                  }
                }}
              />
              {mobileNumberErr && (
                <span className="text-danger">
                  mobile number should not be empty and it should be 10 digit numerics.
                </span>
              )}
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
              Password
            </label>
            <div className="col-sm-9">
              <input
                type={inputPassword}
                className={`form-control ${passwordErr ? "redBorder" : ""}`}
                placeholder="Password"
                id="passcode"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
              {passwordErr && <span className="text-danger">password should be valid</span>}
              <div className="showPasswordWrapper d-flex align-items-center">
                <input className="cursor-pointer" type="checkbox" onClick={showPassword} />
                <span>show password</span>
              </div>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-3 col-form-label ">
              Confirm Password
            </label>
            <div className="col-sm-9">
              <input
                className={`form-control ${passwordMatchErr ? "redBorder" : ""}`}
                placeholder="Re-enter Password"
                type="text"
                value={confirmPassword}
                onChange={event => setConfirmPassword(event.target.value)}
              />
              {passwordMatchErr && <span className="text-danger">Password should be same </span>}
            </div>
          </div>
        </div>
        <div className="text-center signUpActionWrap row d-flex justify-content-center">
          <button type="submit" className="btn btn-primary col-sm-3">
            Sign Up
          </button>
          <button className="btn btn-warning col-sm-3" onClick={resetForm}>
            Reset
          </button>
          <p>
            Already have account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Signup;
