import React from "react";
import "../../pages/Customer/Orders_customer/Orders_customer.css"

import "bootstrap/dist/css/bootstrap.min.css";

import time from "../../images/access-time.svg"
import image from "../../images/brown_shirt.svg"
import deliver from "../../images/deviler-orders.svg"

function MyOrders() {
    return (
        <div>
            <div className="time_order d-flex align-items-center mt-0-5-v">
                <img src={time}></img>
                <span className="mx-0-5-v">4 / 13 / 2021</span>
                <span>(17.25)</span>
            </div>

            <div className="frame_orders bg-white mt-0-5-v mb-1-v">
                <div className="row p-1-v">
                    <div className="col-1">
                        <img src={image} className="image_orders"></img>
                    </div>
                    <div className="col-4 text-uppercase mx-2-v">
                        <p className="m-0">order no. #7255608</p>
                        <p className="m-0 text_orders">leather jacket (x2)</p>
                        <p className="m-0 text_orders">red jacket (x2)</p>
                    </div>
                    <div className="col-6 text-right d-flex flex-column align-items-end">
                        <div className="d-flex align-items-center">
                            <p className="mx-1-v text_orders text-dark">Order Status :</p>
                            <p className="m-0 text_orders">Out for Deliver</p>
                            <img src={deliver}></img>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="mx-4-v text_orders text-dark">TOTAL :</p>
                            <p className="m-0 price_orders color-second">฿ 570.-</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MyOrders;