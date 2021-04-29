import React from "react";
import "./Orders_customer.css"
import CustomerMenu from "../../../components/CustomerMenu/CustomerMenu.js"

import "bootstrap/dist/css/bootstrap.min.css";

function OrderCustomer() {
    return (
        <div className="d-flex justify-content-center bg-pearl">
            <CustomerMenu />

            <div className="w-60 frame_customer bg-white px-2-v">
            </div>
        </div>
    );
}
export default OrderCustomer;