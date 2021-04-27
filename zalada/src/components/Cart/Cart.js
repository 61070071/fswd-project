import React from "react";
import "../../App.css"
import "../../pages/Cart/Cart.css";

import Goods from "../../images/leather_jacket_PNG41.png"
import Del from "../../images/del-product.svg"
import Add from "../../images/add-product.svg"

function Cart() {
    return ( 
        <div className="d-flex justify-content-between align-items-center w-100 mb-4">
            <div className="d-flex align-items-center">
                <img alt="" src={Goods} className="img_goods"></img>
                <h5 className="ml-3">Modern Pastel Lamp </h5>
            </div>
            <div>
                <img alt="" src={Del} className="img_items"></img>
                <span className="items_count">1</span>
                <img alt="" src={Add} className="img_items"></img>
            </div>
            <div className="cost_good">
                <p>฿ 270</p>
            </div>
        </div>
    );
}
export default Cart;