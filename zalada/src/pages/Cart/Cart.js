import "./Cart.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import CartLogo from "../../images/shopping-cart-black-shape.svg"
// import Goods from "../../images/leather_jacket_PNG41.png"
// import Del from "../../images/del-product.svg"
// import Add from "../../images/add-product.svg"

import ItemGoods from "../../components/Cart/Cart.js"
function Cart() {
  return (
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-10 mt-5 p-0">
                <div className="d-flex align-items-center">
                    <p className="cart_header">CART</p>
                    <img alt="" src={CartLogo} className="img_cart ml-3"></img>
                </div>
                <div className="cart_shop mt-2 d-flex">
                    {/* component */}
                    <ItemGoods/>

                    {/* total price */}
                    <hr className="line mt-5 mb-2"></hr>
                    <div className="d-flex justify-content-between align-items-baseline w-100">
                        <div>
                            <h4 className="m-0">TOTAL</h4>
                        </div>
                        <div className="cost_th d-flex justify-content-between align-items-baseline">
                            <h4 className="m-0">TH</h4>
                            <div className="total_price d-flex align-items-center">
                                <p className="m-0 mr-3 ml-5">฿</p>
                                <p className="m-0">270</p>
                            </div>
                        </div>
                    </div>
                    <hr className="line"></hr>

                    {/* button */}
                    <div>
                        <button className="btn btn_confirm">CONFIRM TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Cart;