import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarStyle from "./style";
import SVGInline from "react-svg-inline";
import { logo } from "../../assets/icons";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth-service";
import backendApi from "../../helpers/backendApi";

const Navbar = () => {
  const user = AuthService.getCurrentUser();
  const [scrollPosition, setSrollPosition] = useState(0);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      const fetchData = async () => {
        let result = await axios.get(`${backendApi}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        });
        setUserData(result.data);
      };
      fetchData();
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <NavbarStyle
      position={scrollPosition > 0 ? "fixed;" : "absolute;"}
      top={scrollPosition > 0 ? "0px;" : "50px;"}
    >
      <div className="list">
        {user && userData ? (
          <p className="item">
            <Link to="/schedule">Schedule</Link>
          </p>
        ) : null}
      </div>
      <div className="logo">
        <SVGInline svg={logo} />
      </div>
      <div className="auth">
        {!user ? (
          <>
            <div className="sign">
              <Link to="/auth/register" className="register">
                Sign Up
              </Link>
              <Link to="/auth/login">Sign In</Link>
            </div>
          </>
        ) : (
          <Link to="/auth/login" onClick={logOut}>
            <div className="sign">Logout</div>
          </Link>
        )}
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
