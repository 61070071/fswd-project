import React from "react";
import "./AdminOrderDetail.css"
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar"
import CustomerProduct from "../../../components/CustomerProduct/CustomerProduct.js"
import packageWhite from "../../../images/package-white.svg";
import truckWhite from "../../../images/truck-white.svg";
import deliveredGray from "../../../images/delivered-gray.svg";

import "bootstrap/dist/css/bootstrap.min.css";

function AdminOrderDetail() {
    return (
        <div className="d-flex flex-wrap">
            <div className="w-15">
                <AdminNavBar page={1}/>
            </div>
            <div className="w-85 d-flex flex-column bg-gray">
                <div className="d-flex justify-content-center">
                    <div className="order_detail w-60">
                        <div className="customer_detail">
                            <p className="text-uppercase pb-1-v m-0">customer details</p>
                            <hr className="m-0"></hr>
                            <div className="row mt-1-v">
                                <div className="col-3 text-right">
                                    <p>customer :</p>
                                    <p>order date :</p>
                                    <p>payment method :</p>
                                    <p>delivery address :</p>
                                </div>
                                <div className="col-6">
                                    <p className="text-uppercase">Thanapon Chanlaor</p>
                                    <p>24 / 4 /2021</p>
                                    <p className="text-uppercase">credit card</p>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</p>
                                </div>
                            </div>
                        </div>

                        <div className="order_product_detail">
                            <div className="d-flex align-items-center justify-content-center">
                                <p className="text-uppercase py-1-v m-0">order no.</p>
                                <p className="m-0 px-0-5-v">#7255608</p>
                            </div>
                            <hr className="m-0"></hr>
                            <p className="color-second mt-1-v">STATUS</p>

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
                        </div>

                        <div className="product_detail">
                            <p className="text-uppercase text-center">products</p>
                            <hr className="m-0"></hr>
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
                            <hr className="m-0"></hr>

                            <CustomerProduct />
                            <hr className="m-0"></hr>
                            <div className="total text-uppercase d-flex justify-content-between align-items-end">
                                <p className="m-0">total</p>
                                <div className="text-right mt-1-v">
                                    <p className="mb-0-5-v fs-small color-second">STANDARD DELIVERY +30</p>
                                    <p className="m-0 fs-large">฿ 570.-</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order_detail w-30">
                        <div className="status_detail text-uppercase">
                            <p className="text-center color-second m-0 pb-1-v">status</p>
                            <hr className="m-0"></hr>
                            <div className="d-flex flex-column">
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="status_order" className="radio_type" />
                                    <span>order recieved</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="status_order" className="radio_type" />
                                    <span>out for delivery</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="status_order" className="radio_type" />
                                    <span>delivered</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="status_order" className="radio_type" />
                                    <span>refunded</span>
                                </div>
                                <div className="d-flex align-items-center cenceled">
                                    <input type="radio" name="status_order" className="radio_cenceled" />
                                    <span>canceled</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminOrderDetail;