import React from "react";
import "./Orders_customer.css"
import CustomerMenu from "../../../components/CustomerMenu/CustomerMenu.js"

import "bootstrap/dist/css/bootstrap.min.css";

import MyOrders from "../../../components/MyOrders/MyOrders.js"

function OrderCustomer() {
    return (
        <div className="d-flex justify-content-center bg-pearl">
            <CustomerMenu />

            <div className="w-60 frame_customer bg-white px-2-v">
                <p className="text-uppercase py-1-v m-0">my orders</p>
                <hr className="line_sep1 m-0"></hr>

                <MyOrders />
            </div>
        </div>
    );
}
export default OrderCustomer;