import "./Payment.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import mastercard from "../../images/mastercard.svg"
import visa from "../../images/visa.svg"
import paypal from "../../images/paypal.svg"
import delivery from "../../images/delivery.svg"
import Goods from "../../images/leather_jacket_PNG41.png"
import Del from "../../images/del-product.svg"
import Add from "../../images/add-product.svg"

import Deliver_goods from "../../components/Payment/Payment.js"

function Payment() {
  return (
    <div className="d-flex justify-content-center">
        <div className="d-flex bg_test2 justify-content-between">
            <div className="payment_method col-8 mr-3">
                <p className="payment_header">PAYMENT METHOD</p>

                <div className="d-flex justify-content-center">
                    <div className="choose_to_pay d-flex flex-column justify-content-center align-content-between text-center m-3">
                        <img src={mastercard}></img>
                        <p className="m-0">mastercard</p>
                    </div>
                    <div className="choose_to_pay d-flex flex-column justify-content-center align-content-between text-center m-3">
                        <img src={visa}></img>
                        <p className="m-0">visa</p>
                    </div>
                    <div className="choose_to_pay d-flex flex-column justify-content-center align-content-between text-center m-3">
                        <img src={paypal}></img>
                        <p className="m-0">paypal</p>
                    </div>
                    <div className="choose_to_pay d-flex flex-column justify-content-center align-content-between text-center m-3">
                        <img src={delivery}></img>
                        <p className="m-0">delivery</p>
                    </div>
                </div>

                <hr></hr>

                <div className="d-flex">
                    <div className="w-50">
                        <div className="pr-4">
                            <label className="form-label">Card number</label>
                            <input className="form-control" type="number" placeholder="0 00 0000000"></input>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="pr-4">
                                <label className="form-label">Expiration date</label>
                                <input className="form-control" type="date"></input>
                            </div>
                            <div className="pr-4">
                                <label className="form-label">CVC Code</label>
                                <input className="form-control" type="number" placeholder="CVC"></input>
                            </div>
                        </div>
                    </div>

                    <div className="w-50">
                        <div className="pl-4">
                            <p>Province</p>
                            <select className="dropdown_country">
                                <option>Thailand</option>
                            </select>
                        </div>

                        <div className="pl-4 mt-3">
                                <label className="form-label">Zip Code</label>
                                <input className="form-control" type="number" placeholder="10020"></input>
                            </div>
                    </div>
                </div>
            </div>

            <div className="payment_sum col-4">
                <div className="text-center">
                    <p className="payment_header">PAYMENT SUMMARY</p>
                </div>

                <hr></hr>

                {/* component */}
                <Deliver_goods/>
                <Deliver_goods/>
                <Deliver_goods/>

                <hr></hr>
                <div className="d-flex justify-content-between">
                    <p className="m-0">STANDARD DELIVERY</p>
                    <p className="text_delivery m-0">฿ 30</p>
                </div>
                <hr></hr>

                <div className="mb-4">
                    <p>DELIVERY TO</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                </div>
                <hr></hr>

                <div className="d-flex justify-content-between align-items-center">
                    <p>TOTAL</p>
                    <p className="deliver_sum">฿ 570.-</p>
                </div>

                {/* button */}
                <div>
                    <button className="btn btn_deliver">PROCESS CHECKOUT</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Payment;