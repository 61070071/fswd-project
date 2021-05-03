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
                console.log(user?.type);
                return (
                    <span className="Navbar-user" style={{ color: "red" }}>Loading ...</span>
                )
            }
            if (user?.type == 'Admin') {
                console.log("2");
                return (
                    <Fragment>
                        <div className="d-flex w-100">
                            <div className="d-flex flex-wrap justify-content-center">
                                <span className="w-100 text-center fs-0-7-v color-second">{user?.name}</span>
                                <Link to="/admin" className="w-55 mx-auto d-flex"><button className="bg-second color-white border-0 fs-0-5-v rounded-pill">MANAGE ORDER</button></Link>
                                <button type="button" className="w-45 mx-auto bg-second color-white border-0 fs-0-5-v rounded-pill" onClick={handleLogout}>LOG OUT</button>
                            </div>
                        </div>
                        {/* <span style={{ color: "grey" }} className="px-0-5-v">{user?.name}</span>
                        <span style={{ color: "grey" }} className="px-0-5-v">ADMIN</span>
                        <button type="button" className="btn btn-outline-danger" onClick={handleLogout}>Logout</button> */}
                    </Fragment>
                )
            }
            if (user?.type == 'Customer') {
                console.log("3");
                return (
                    <Fragment>
                        <div className="d-flex w-100">
                            <div  className="d-flex flex-wrap justify-content-center">
                                <Link to="/customer" className="w-100 text-center fs-0-7-v color-second color-second-hover">{user?.username}</Link>
                                <button type="button" className="w-100 mx-auto bg-second color-white border-0 fs-0-5-v rounded-pill" onClick={handleLogout}>LOG OUT</button>
                            </div>
                        </div>
                    </Fragment>
                )
            }
            return (
                <>
                    <Link to="/login">
                        <span id="sign_in_text" className="px-0-5-v fs-1-v">SIGN IN</span>
                    </Link>
                    <Link to="/register">
                        <span className="px-0-5-v fs-1-v">SIGN UP</span>
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
                    <ul className="d-flex align-items-center justify-content-evenly nav-text">
                        <li>
                            <Link to="/" className="fs-0-9-v">HOME</Link>
                        </li>
                        <li>
                            <Link to="/products" className="fs-0-9-v">SHOP</Link>
                        </li>
                        <li>
                            <Link to="/promotions" className="fs-0-9-v">PROMOTION</Link>
                        </li>
                        <li>
                            <Link to="/about_us" className="fs-0-9-v">ABOUT US</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-end flex-50">
                <div className="d-flex mr-5-v">
                    <img alt="" className="search_logo" src={SearchLogo} />
                    <input className="mr-1-v pr-2-v input-nav-bar fs-0-8-v" type="text" placeholder="Search and hit enter..." />
                    <Link to="/cart">
                        <img alt="" className="cart-logo" src={CartLogo} />
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