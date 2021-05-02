import React, { useState } from "react";
import "../../App.css"
import "../../pages/Cart/Cart.css";

import Goods from "../../images/leather_jacket_PNG41.png"
import Minus from "../../images/del-product.svg"
import Plus from "../../images/add-product.svg"

function Cart() {
    const [countAdd, setCountAdd] = useState(0);
    return (
        <div className="d-flex justify-content-between align-items-center w-100 py-1-v">
            <div className="d-flex align-items-center">
                <img alt="" src={Goods} className="img_goods"/>
                <span className="ml-1-v fs-1-v">Modern Pastel Lamp </span>
            </div>
            <div className="d-flex w-20 justify-content-evenly align-items-center mx-auto">
                <button className="btn-change-amount d-flex align-items-center">
                    <img alt="" src={Minus} />
                </button>
                <div className="num_buy">
                    <span>{countAdd}</span>
                </div>
                <button className="btn-change-amount d-flex align-items-center">
                    <img alt="" src={Plus} />
                </button>
            </div>
            <div className="color-second fs-1-5-v d-flex align-items-center">
                <span>฿ 270</span>
            </div>
        </div>
    );
}
export default Cart;