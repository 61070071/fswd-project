import React from "react";
import "../../pages/Customer/Customer.css"

import "bootstrap/dist/css/bootstrap.min.css";

import account from "./../../images/account-setting.svg"
import order from "./../../images/my-orders.svg"

function CustomerMenu() {
    return (
        <div className="w-20 frame_customer text-uppercase d-flex flex-column justify-content-center align-items-center align-self-start bg-white">
            <p className="py-1-v m-0">my account</p>
            <hr className="line_sep m-0"></hr>
            <div className="d-flex flex-column">
                <div className="d-flex align-items-center py-1-v">
                    <img src={account}></img>
                    <p className="m-0">account setting</p>
                </div>

                {/* color active อยู่ใน .menu */}
            </div>
        </div>
    );
}
export default CustomerMenu;