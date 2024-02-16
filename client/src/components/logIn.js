import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./logIn.css";

function Login() {
  const [emailid, setEmailid] = useState("");
  const [password, setPassWord] = useState("");
  const [emailidErr, setEmailidErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (emailid === "") {
      setEmailidErr(true);
    } else {
      setEmailidErr(false);
    }
    if (password === "") {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    const isValidEmail = validateEmail(emailid);
    if (!isValidEmail) {
      setEmailidErr(true);
    } else {
      setEmailidErr(false);
    }
    if (emailid !== "" && password !== "" && isValidEmail) {
      navigate("/");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="container text-left">
      <div className="loginContainer mx-auto">
        <h1>Log in</h1>
        <form>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Email</label>
            <div className="col-sm-9">
              <input
                type="text"
                className={`form-control ${emailidErr ? "redBorder" : ""}`}
                placeholder="Email"
                value={emailid}
                onChange={event => setEmailid(event.target.value)}
              />
              {emailidErr && (
                <span className="text-danger text-left posAbsolute">Invalid email</span>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Password</label>
            <div className="col-sm-9">
              <input
                type="password"
                className={`form-control ${passwordErr ? "redBorder" : ""}`}
                placeholder="Password"
                value={password}
                onChange={event => setPassWord(event.target.value)}
              />
              {passwordErr && (
                <span className="text-danger text-left posAbsolute">invalid password</span>
              )}
            </div>
          </div>
        </form>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
          <p>
            Create New Account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </form>
  );
}
export default Login;
