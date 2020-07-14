import styled from "styled-components";

const NavbarStyled = styled.div`
  z-index: 999;
  height: 78px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 7px 14px -5px rgba(133, 133, 133, 1);
  -moz-box-shadow: 0px 7px 14px -5px rgba(133, 133, 133, 1);
  box-shadow: 0px 7px 14px -5px rgba(133, 133, 133, 1);
  border-top-left-radius: ${(props) => {
    if (props.top === "50px;") return "10px";
    return "0px";
  }};
  border-top-right-radius: ${(props) => {
    if (props.top === "50px;") return "10px";
    return "0px";
  }};

  background: #fff;
  position: ${(props) => {
    if (props.position) return props.position;
    return "absolute";
  }};
  width: ${(props) => {
    if (props.top === "50px;") return "95%";
    return "100%";
  }};
  top: ${(props) => {
    if (props.top) return props.top;
    return "50px";
  }};

  transition: all 0.4s;
  left: ${(props) => {
    if (props.top) return props.top;
    return "0px";
  }};
  right: ${(props) => {
    if (props.top) return props.top;
    return "0px";
  }};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .list {
    padding-left: 55px;
    display: flex;
    flex-basis: 47.5%;

    p {
      margin-right: 20px;
      font-weight: 900;
      font-size: 16px;
      text-transform: uppercase;
      cursor: pointer;
      :hover {
        color: #9e0f0f !important;
      }
    }
    .dropdown {
      position: relative;
      margin-right: 10px;
      height: auto;
      cursor: pointer;
      :hover {
        color: #9e0f0f;
        span {
          border-top: 7px solid #9e0f0f;
        }
        .submenu {
          color: #000;
        }
      }

      .submenu {
        position: absolute;
        top: 52px;
        left: 0px;
        /* height: 500px; */
        width: 260px;
        padding: 0px 30px;
        border-radius: 5px;
        background: #fff;
        -webkit-box-shadow: 0px 7px 14px -5px rgba(110, 110, 110, 1);
        -moz-box-shadow: 0px 7px 14px -5px rgba(110, 110, 110, 1);
        box-shadow: 0px 7px 14px -5px rgba(110, 110, 110, 1);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        transition: all 1s;

        ul {
          padding: 15px 0px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-bottom: 1px solid #c4c4c4;

          :last-child {
            border-bottom: 1px solid transparent;
            margin: 0px;
          }

          p,
          li {
            margin: 5px 0px;
            list-style: none;
            color: #454545;
            width: 100% !important;

            :hover {
              color: #9e0f0f !important;
            }
          }
        }
      }

      span {
        position: absolute;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 7px solid #000;
        right: 2.5px;
        top: 9px;
      }
    }
  }

  .logo {
    flex-basis: 5%;
    border-radius: 50%;
    height: 140px;
    width: 140px;
    background: #fff;
    margin-top: 70px;
    -webkit-box-shadow: 0px 4px 5px -2px rgba(173, 173, 173, 1);
    -moz-box-shadow: 0px 4px 5px -2px rgba(173, 173, 173, 1);
    box-shadow: 0px 4px 5px -2px rgba(173, 173, 173, 1);
    svg {
      border-radius: 50%;
      margin-top: 5px;
      border: 20px solid #fff;
      height: 140px;
      width: 140px;
    }
  }
  .auth {
    flex-basis: 47.5%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 55px;

    .sign {
      border-radius: 50px;
      background: #656565;
      padding: 10px 35px;
      color: #fff;
      font-weight: 300;
      text-transform: lowercase;
      letter-spacing: 1px;
      margin-right: 15px;
      font-size: 14px;
      cursor: pointer;

      a {
        margin: 10px;
        :hover {
          text-decoration: underline;
          color: #fff;
        }
      }
      .register:after {
        content: "";
        margin-left: 20px;
        border-right: 1px solid #cdcccc;
      }
    }
    .cart {
      position: relative;
      padding: 5px 20px 5px 25px;
      span {
        height: 35px;
        margin-left: 5px;
        svg {
          height: 35px;
          path {
            fill: #656565;
          }
        }
      }

      .cartNumber {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 2px;
        right: 10px;
        border-radius: 50%;
        background: red;
        width: 19px;
        height: 19px;
        font-size: 12px;
        color: #fff;
        padding: 2.5px;
      }
    }
    .avatar {
      display: flex;
      align-items: center;
      svg {
        height: 35px;
        width: 35px;
        margin-left: 10px;
        cursor: pointer;
        path {
          fill: #656565;
        }
      }
    }
  }

  #admins-dropdown {
    .submenu {
      height: 130px;
      width: 240px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  ul .item {
    width: 100% !important;
  }
  ul .item .link {
    font-weight: 300 !important;
    width: 100% !important;
  }
`;

export default NavbarStyled;
