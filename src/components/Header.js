import React, { useState } from "react";
import Logo from "../../public/images/logo.jpg";

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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <div className="login-btn-container">
                <button className="login-btn" onClick={changeBtnName}>{btnName}</button>
            </div>
          </ul>
        </div>
      </div>
    );
};

export default Header;