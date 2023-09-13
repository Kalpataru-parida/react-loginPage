import React, { useEffect, useState } from "react";
import "./signUpPage.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import password_icon from "../../assets/images/password.png";
import user_icon from "../../assets/images/user.png";
import email_icon from "../../assets/images/mail.png";
import gender_icon from "../../assets/images/toilet.png";
import phone_icon from "../../assets/images/phone-call.png";
import google from "../../assets/images/search.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import { Link } from "react-router-dom";

const signUpPage = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
  });
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  const validation = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    if (values.name.length === 0) {
      errors.name = "name can not be empty";
    } else if (values.name.length < 4) {
      errors.name = "name must be 4 character";
    }
    if (values.email.length === 0) {
      errors.email = "email can not be empty";
    } else if (!regex.test(values.email)) {
      errors.email = "email is not valid";
    }
    if (values.password.length === 0) {
      errors.password = "password can not be empty";
    } else if (values.password.length < 8) {
      errors.password = "Password must be eight character";
    }
    if (values.phone.length === 0) {
      errors.phone = "phone can not be empty";
    } else if (values.phone.length < 10) {
      errors.phone = "phone must be ten character";
    }
    if (values.gender.length === 0) {
      errors.gender = "gender can not be empty";
    } else if (values.gender.length > 7) {
      errors.gender = "gender must be six character";
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
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          User Name
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleOnChange}
            ></input>
          </div>
          <p className="error">{error.name}</p>
          Email
          <div className="input">
            <img src={email_icon} alt="" />
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
          <p className="error2">{error.password}</p>
          Phone
          <div className="input">
            <img src={phone_icon} alt="" />
            <input
              type="number"
              name="phone"
              value={values.phone}
              onChange={handleOnChange}
            ></input>
          </div>
          <p className="error">{error.phone}</p>
          Gender
          <div className="input">
            <img src={gender_icon} alt="" />
            <input
              type="text"
              name="gender"
              value={values.gender}
              onChange={handleOnChange}
            ></input>
          </div>
          <p className="error">{error.gender}</p>
        </div>
        {/* <div className="remember">
        <input type="checkbox" className="checkbox"></input>
        Remember me?</div> */}
        <button className="signup-button" type="submit">
          SIGN UP
        </button>
        {Object.keys(error).length === 0 && submit ? (
          <p className="success">sign up successfully</p>
        ) : (
          <></>
        )}
        <div className="image-icon">
          <img src={google} alt="" />
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="have-acc">
          Already an acount?
          <Link to="/SignIn"> SIGN IN</Link>
        </div>
      </div>
    </form>
  );
};

export default signUpPage;
