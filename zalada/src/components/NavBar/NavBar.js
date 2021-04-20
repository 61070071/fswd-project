import React from "react";
import "../../App.css"
import "./NavBar.css";
import HomeLogo from "../../images/Zalada.svg"
import CartLogo from "../../images/shopping-cart-black-shape.svg"
import SearchLogo from "../../images/search.svg"
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <div className="bg_navbar d-flex align-items-center mx-auto">
            <div className="d-flex align-items-center flex-25">
                <div className="flex-25">
                    <Link to="/"><img alt="" className="home_logo" src={HomeLogo} /></Link>
                </div>
                <div className="align-items-center flex-100">
                    <ul className="d-flex align-items-center justify-content-evenly">
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/products">SHOP</Link>
                        </li>
                        <li>
                            <Link to="/about_us">ABOUT US</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-end flex-50">
                <div className="d-flex mr-6-v">
                    <img alt="" className="search_logo" src={SearchLogo} />
                    <input className="mr-1-v pr-2-v" type="text" placeholder="Search and hit enter..." />
                    <Link to="/cart"><img alt="" className="cart_logo" src={CartLogo} /></Link>
                </div>
                <div className="d-flex align-items-center">
                    <span id="sign_in_text" className="px-0-5-v">SIGN IN</span>
                    <span className="px-0-5-v">SIGN UP</span>
                </div>
            </div>
        </div>

    );
}


export default NavBar;