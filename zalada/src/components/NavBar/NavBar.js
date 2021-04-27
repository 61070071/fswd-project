import React, { Fragment, useMemo } from "react";
import "../../App.css"
import "./NavBar.css";
import HomeLogo from "../../images/Zalada.svg"
import CartLogo from "../../images/shopping-cart-black-shape.svg"
import SearchLogo from "../../images/search.svg"
import { Link } from "react-router-dom";
import { useSession } from '../../contexts/SessionContext'
function NavBar() {
    const { loading, user, logout: handleLogout } = useSession()
    const userBox = useMemo(
        () => {
            if (loading) {
                return (
                    <span className="Navbar-user" style={{ color: "red" }}>Loading ...</span>
                )
            }
            if (user) {
                return (
                    <Fragment>
                        <span style={{ color: "red" }} className="px-0-5-v">{user?.name}</span>
                        <button type="button" onClick={handleLogout}>Logout</button>
                    </Fragment>
                )
            }
            return (
                <>
                    <Link to="/login">
                        <span id="sign_in_text" className="px-0-5-v">SIGN IN</span>
                    </Link>
                    <Link to="/register">
                        <span className="px-0-5-v">SIGN UP</span>
                    </Link>
                </>
            )
        },
        [handleLogout, loading, user],
    )
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
                    <Link to="/cart">
                        <img alt="" className="cart_logo" src={CartLogo} />
                    </Link>
                </div>
                <div className="d-flex align-items-center">
                    {userBox}
                </div>
            </div>
        </div>

    );
}


export default NavBar;