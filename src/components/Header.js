import React, { useState } from "react";
import Logo from "../../public/images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const changeBtnName = () => {
        if(btnName === "Login") {
            setBtnName("Logout");
        } else {
            setBtnName("Login");
        }
    }

    return (
      <div className="header">
        <div className="logoContainer">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li className="nav-items-list"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-items-list"><Link to="/about" className="nav-link">About Us</Link></li>
            <li className="nav-items-list"><Link to="/contact" className="nav-link">Contact Us</Link></li>
            <li className="nav-items-list"><Link to="/cart" className="nav-link">Cart</Link></li>
            <div className="login-btn-container">
                <button className="login-btn" onClick={changeBtnName}>{btnName}</button>
            </div>
          </ul>
        </div>
      </div>
    );
};

export default Header;