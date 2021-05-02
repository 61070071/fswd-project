import "./Cart.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import CartLogo from "../../images/shopping-cart-black-shape.svg"
import { Link } from "react-router-dom";
import ItemGoods from "../../components/Cart/Cart.js"
function Cart() {
    return (
        <div className="d-flex justify-content-center bg-main py-2-v">
            <div className="w-55 d-flex flex-wrap">
                <div className="d-flex align-items-center w-100 py-0-5-v">
                    <span className="fs-1-v font-weight-bold">CART</span>
                    <img alt="" src={CartLogo} className="img_cart ml-0-5-v"></img>
                </div>
                <div className="cart_shop d-flex w-100">
                    {/* component */}
                    <ItemGoods />

                    {/* total price */}
                    <div className="d-flex align-items-center w-100 py-0-5-v line-top-bottom-gray mt-1-v">
                        <div className="d-flex w-85">
                            <div className="w-50 d-flex">
                                <span className="m-0 fs-1-2-v color-third">TOTAL</span>
                            </div>
                            <div className="d-flex w-50 justify-content-end">
                                <span className="m-0 fs-1-2-v color-third">TH</span>
                            </div>
                        </div>
                        <div className="w-15 d-flex justify-content-end">
                            <span className="m-0 fs-2-v color-second font-weight-bold">฿ 270</span>
                        </div>
                    </div>
                    {/* button */}
                    <div className="d-flex w-40 mx-auto py-0-5-v">
                        <Link to="/checkout" className="w-100"><button className="py-0-3-v border-0 btn_confirm bg-second color-white font-weight-bold w-100 fs-0-8-v">CONFIRM TO CHECKOUT</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;