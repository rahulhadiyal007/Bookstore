import React from "react";
import { Link } from "react-router-dom";
import { footerStyle } from "./style";
import siteLogo from "../../assets/images/Screenshot__1_-removebg-preview.png";

const Footer = () => {
  const classes = footerStyle();
  return (
    <div className={classes.footerWrapper}>
      <footer className="site-footer" id="footer">
        <div className="bottom-footer">
          <div className="container">
            <div className="text-center">
              <div className="footer-logo">
                <Link to="/" title="logo">
                  <img src={siteLogo} alt="sitelogo" />
                </Link>
              </div>
              <p className="copyright-text">
                © 2023 R.Hadiyal   All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
