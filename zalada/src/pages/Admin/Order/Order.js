import React from "react";
import "./Order.css"
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar"
import AdminOrder from "../../../components/AdminOrders/AdminOrders"

import "bootstrap/dist/css/bootstrap.min.css";

function Order() {
    return (
        <div className="d-flex">
            <AdminNavBar />
            <div className="order_dashboard w-75">
                <div className="d-flex justify-content-between">
                    <div>
                        <p>DashBoard</p>
                    </div>
                    <div className="d-flex">
                        <p className="mr-3">Display by : </p>
                        <span>
                            <select>
                                <option>RECENTLY</option>
                            </select>
                        </span>
                    </div>
                </div>
                <hr className="m-0"></hr>
                
                <div className="row mt-3">
                    <div className="col-2">
                        <p>SELECT</p>
                    </div>
                    <div className="col-5">
                        <p>ORDER NO.</p>
                    </div>
                    <div className="col-2 text-center">
                        <p>PRODUCT (QTY)</p>
                    </div>
                    <div className="col-2 text-center">
                        <p>TOTAL PRICE</p>
                    </div>
                    <div className="col-1">
                    </div>
                </div>

                <AdminOrder />
                
            </div>
        </div>
    );
}

export default Order;
