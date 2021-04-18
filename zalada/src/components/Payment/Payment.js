import React from "react";
import "../../App.css"
import "../../pages/Payment/Payment.css";

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
function Payment() {
    return ( 
        <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center">
                <div className="frame_img d-flex justify-content-center align-items-center">
                    <img src={Goods}></img>
                </div>
                <div className="ml-3">
                    <p>Modern Pastel Lamp </p>
                    <div>
                        <img src={Del} className="img_items_payment"></img>
                        <span className="items_count_payment">1</span>
                        <img src={Add} className="img_items_payment"></img>
                    </div>
                </div>
            </div>

            <div>
                <div className="cost_good_payment">
                    <p>฿ 270</p>
                </div>
            </div>
        </div>
    );
}
            
export default Payment;