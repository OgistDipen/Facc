import React, { useState } from "react";
import LoginStyle from "./style";
import axios from "axios";
import backendApi from "../../../helpers/backendApi";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import { Formik } from "formik";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <LoginStyle>
      <div className="login-wrap">
        <div className="image"></div>
        <div className="form-login">
          <div className="login-title">Sign In</div>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await axios
                  .post(`${backendApi}/api/auth/login`, {
                    username: values.username,
                    password: values.password,
                  })
                  .then((response) => {
                    if (response.data.access_token) {
                      localStorage.setItem(
                        "user",
                        JSON.stringify(response.data)
                      );
                    }
                    return response.data;
                  });
                window.location.href = "schedule";
              } catch (error) {
                if (error.response.data.error) {
                  setErrorMessage(error.response.data.error);
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
                <div className="forgetDiv">
                  <Link to="/auth/register">Sign Up</Link>
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
    </LoginStyle>
  );
};

export default Login;
