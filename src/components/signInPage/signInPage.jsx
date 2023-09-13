import React, { useEffect, useState } from "react";
import "./signInPage.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import password_icon from "../../assets/images/password.png";
import user_icon from "../../assets/images/user.png";
import google from "../../assets/images/search.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import { Link } from "react-router-dom";

const signInPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  const validation = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    if (!values.email) {
      errors.email = "email can not be empty";
      //   toast.error("Email can not be empty", {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
    } else if (!regex.test(values.email)) {
      errors.email = "email is not valid";
      //   toast.error("Email is not valid", {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
    }
    if (values.password.length === 0) {
      errors.password = "password can not be empty";
      //   toast.error("Password can not be empty", {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
    } else if (values.password.length < 8) {
      errors.password = "password must be eight character";
      //   toast.error("Password must be eight character", {
      //     position: toast.POSITION.TOP_RIGHT,
      //   });
    }
    return errors;
  };
  const handleOnChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(validation(values));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && submit) {
      console.log(values);
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="header">
          <div className="text">Sign In</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          Email
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleOnChange}
            ></input>
          </div>
          <p className="error">{error.email}</p>
          Password
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleOnChange}
            ></input>
          </div>
          <p className="error">{error.password}</p>
        </div>
        {/* <div className="remember">
        <input type="checkbox" className="checkbox"></input>
        Remember me?</div> */}
        <button className="signin-button" type="submit">
          SIGN IN
        </button>
        <p className="forget">Forgot Password?</p>
        {Object.keys(error).length === 0 && submit ? (
          <p className="success">sign in successfully !!</p>
        ) : (
          <></>
        )}
        <div className="image-icon">
          <img src={google} alt="" />
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="have-acc">
          Need an acount?
          <Link to="/SignUp"> SIGN UP</Link>
        </div>
      </div>
    </form>
  );
};

export default signInPage;
