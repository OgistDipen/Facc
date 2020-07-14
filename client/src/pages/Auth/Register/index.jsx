import React, { useState } from "react";
import RegisterStyle from "./style";
import axios from "axios";
import backendApi from "../../../helpers/backendApi";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import { Link } from "react-router-dom";
import { Formik } from "formik";

const Register = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showMessage, setShowMessage] = useState("");
  const [notifCounter, setNotifCounter] = useState(0);

  const popNotification = (message) => {
    if (notifCounter === 0) {
      setNotifCounter(1);
      setShowMessage(message);
      window.document.getElementById("notification-message2").style.left =
        "50px";
      setTimeout(() => {
        setShowMessage("");
        window.document.getElementById("notification-message2").style.left =
          "200px";
        setNotifCounter(0);
      }, 2500);
    }
  };

  return (
    <RegisterStyle>
      <div
        style={{ visibility: showMessage !== "" ? "visible" : "hidden" }}
        id="notification-message2"
        className="notification-message"
      >
        <p>Notification Message</p>
        {showMessage !== "" ? showMessage : null}
      </div>
      <div className="register-wrap">
        <div className="image"></div>
        <div className="form-register">
          <div className="register-title">Sign Up</div>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={async (values, { setSubmitting }) => {
              if (values.password !== values.password_confirm) {
                setErrorMessage("Passwords must match.");
                return;
              }
              try {
                await axios.post(`${backendApi}/api/auth/register`, {
                  username: values.username,
                  password: values.password,
                });

                popNotification("Registered Successfully.");
                setTimeout(() => {
                  props.history.push(`/auth/login`);
                }, 2500);

                setErrorMessage("");
              } catch (error) {
                if (error.response.data.error[0]) {
                  setErrorMessage(error.response.data.error[0]);
                }
              }
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    opacity: errorMessage !== "" ? 1 : "0",
                    height: errorMessage !== "" ? "20px" : "0px",
                  }}
                  className="err-msg"
                >
                  {errorMessage !== "" ? errorMessage : null}
                </div>
                <div className="inputField">
                  <Input
                    placeholder="Username"
                    type="text"
                    name="username"
                    width={"100%;"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                </div>
                <div className="inputField">
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    width={"100%;"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </div>
                <div className="inputField">
                  <Input
                    placeholder="Password Confirm"
                    type="password"
                    name="password_confirm"
                    width={"100%;"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password_confirm}
                  />
                </div>

                <div className="forgetDiv">
                  <Link to="/auth/login">Sign In</Link>
                </div>
                <Button
                  width={"100%"}
                  text={"submit"}
                  tt={"uppercase"}
                  btn={"info"}
                  type="submit"
                  disabled={isSubmitting}
                />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </RegisterStyle>
  );
};

export default Register;
