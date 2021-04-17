import React from "react";
import "../../App.css"
import "../../pages/Cart/Cart.css";

import Goods from "../../images/leather_jacket_PNG41.png"
import Del from "../../images/del-product.svg"
import Add from "../../images/add-product.svg"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
function Cart() {
    return ( 
        <div className="d-flex justify-content-between align-items-center w-100 mb-4">
            <div className="d-flex align-items-center">
                <img src={Goods} className="img_goods"></img>
                <h5 className="ml-3">Modern Pastel Lamp </h5>
            </div>
            <div>
                <img src={Del} className="img_items"></img>
                <span className="items_count">1</span>
                <img src={Add} className="img_items"></img>
            </div>
            <div className="cost_good">
                <p>฿ 270</p>
            </div>
        </div>
    );
}
            
export default Cart;