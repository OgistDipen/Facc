import React from "react";
import FooterStyle from "./style";
import SVGInline from "react-svg-inline";
import { fb, tw, ins } from "../../assets/icons";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="menu">
        <ul>
          <li className="main-li">Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>

        <ul>
          <li className="main-li">Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>

        <ul>
          <li className="main-li">Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>

        <ul>
          <li className="main-li">Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
          <li>Lorem Ipsum</li>
        </ul>
      </div>
      <div className="bottom-footer">
        <div className="policy">
          <div className="policy-title">Lorem Ipsum</div>
          <div className="policies">
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className="copyrights">
            Copyright 2020 Lorem Ipsum. All Rights Reserved.
          </div>
        </div>
        <div className="social-icons">
          <SVGInline svg={ins} />
          <SVGInline svg={fb} />
          <SVGInline svg={tw} />
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
