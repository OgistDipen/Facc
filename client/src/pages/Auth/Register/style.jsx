import styled from "styled-components";
import registerBg from "../../../assets/images/home1.jpg";

const RegisterStyle = styled.div`
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
  position: relative;

  .notification-message {
    position: absolute;
    z-index: 9999;
    top: 200px;
    left: -200px;
    border-radius: 2px;
    height: 140px;
    width: 180px;
    border-top: 10px solid #4285f4;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    transition: all 0.3s;
    padding: 5px 10px;
    font-size: 14px;
    color: #000;
    font-weight: 400;
    p {
      font-size: 14px;
      font-weight: 600;
      margin: 5px 0px 15px 0px;
    }
  }

  .err-msg {
    transition: all 0.5s;
    margin-bottom: 50px;
    color: #9e2222;
    text-align: center;
    height: 20px;
    opacity: 0;
    font-size: 14px;
  }

  .register-wrap {
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

    .form-register {
      background: #fff;
      flex-basis: 50%;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .register-title {
        font-size: 35px;
        margin-bottom: 30px;
        font-weight: 600;
      }
      form {
        width: 55%;
      }

      input {
        margin: 5px 0px;
      }

      button {
        margin-top: 20px;
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

export default RegisterStyle;
