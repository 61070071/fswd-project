import React from "react";
import "./Order_detail.css"
import CustomerMenu from "../../../components/CustomerMenu/CustomerMenu.js"
import CustomerProduct from "../../../components/CustomerProduct/CustomerProduct.js"

import "bootstrap/dist/css/bootstrap.min.css";

import packageWhite from "../../../images/package-white.svg";
import truckWhite from "../../../images/truck-white.svg";
import truckGray from "../../../images/truck-gray.svg";
import deliveredWhite from "../../../images/delivered-white.svg";
import deliveredGray from "../../../images/delivered-gray.svg";
import brownShirt from "../../../images/brown_shirt.svg";

function OrderDetail() {
    return (
        <div className="d-flex justify-content-center bg-pearl">
            <CustomerMenu />

            <div className="w-60 frame_customer bg-white px-2-v">
                <div className="d-flex align-items-center justify-content-center">
                    <p className="text-uppercase py-1-v m-0">order no.</p>
                    <p className="m-0 px-0-5-v">#7255608</p>
                </div>
                <hr className="line_sep1 m-0"></hr>

                <div>
                    <p className="color-second mt-0-5-v">STATUS</p>
                    <div className="status d-flex align-items-center justify-content-center">
                        <div className="d-flex flex-column justify-content-center">
                            <div className="d-flex align-items-center">
                                <div className="bg_circle_order">
                                    <img src={packageWhite} className="img_status"></img>
                                </div>
                                <div className="line_status"></div>
                            </div>
                            <p className="text-uppercase mt-0-5-v color-second">order recieved</p>
                        </div>

                        <div className="d-flex flex-column justify-content-center">
                            <div className="d-flex align-items-center">
                                <div className="bg_circle_order">
                                    <img src={truckWhite} className="img_status"></img>
                                </div>
                                <div className="line_status"></div>
                            </div>
                            <p className="text-uppercase mt-0-5-v color-second">out for deliver</p>
                        </div>

                        <div className="d-flex flex-column justify-content-center">
                            <div className="d-flex align-items-center">
                                <div className="border_circle_order">
                                    <img src={deliveredGray} className="img_status"></img>
                                </div>
                            </div>
                            <p className="text-uppercase mt-0-5-v text-center color-no-5">delivered</p>
                        </div>
                    </div>

                    <div className="product">
                        <hr className="line_sep1 m-0"></hr>
                        <div className="row p-1-v">
                            <div className="col-7 text-uppercase">
                                <p className="m-0">product</p>
                            </div>
                            <div className="col-3 text-uppercase text-center">
                                <p className="m-0">qunatity</p>
                            </div>
                            <div className="col-2 text-uppercase text-right">
                                <p className="m-0">price</p>
                            </div>
                        </div>
                        <hr className="line_sep1 m-0"></hr>

                        <CustomerProduct />
                    </div>

                    <hr className="line_sep1"></hr>
                    <div className="total text-uppercase d-flex justify-content-between align-items-end mb-1-v">
                        <p className="m-0">total</p>
                        <div className="text-right">
                            <p className="mb-0-5-v fs-small color-second">STANDARD DELIVERY +30</p>
                            <p className="m-0 fs-large">฿ 570.-</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default OrderDetail;