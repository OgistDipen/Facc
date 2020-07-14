import styled from "styled-components";
import registerBg from "../../../assets/images/home1.jpg";

const LoginStyle = styled.div`
  padding: 280px 300px 150px 300px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(109, 108, 196, 1) 0%,
    rgba(9, 52, 123, 1) 81%,
    rgba(8, 41, 106, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;

  .err-msg {
    transition: all 0.5s;
    margin-bottom: 5px;
    color: #9e2222;
    height: 20px;
    opacity: 0;
  }

  .login-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 960px;
    border-radius: 8px;
    height: 580px;

    .image {
      flex-basis: 50%;
      background: url(${registerBg});
      background-size: cover;
      background-repeat: no-repeat;
      height: 580px;
      width: 480px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    .form-login {
      background: #fff;
      flex-basis: 50%;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .login-title {
        font-size: 35px;
        margin-bottom: 45px;
        font-weight: 600;
      }
      form {
        width: 55%;
      }

      input {
        margin: 5px 0px;
      }

      button {
        margin-top: 30px;
      }
      .forgetDiv {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0px;
        a {
          font-size: 11px;
          color: #093075;
          cursor: pointer;
        }
      }
    }
  }
`;

export default LoginStyle;
