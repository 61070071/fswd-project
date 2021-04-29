import React from "react";
import "./Customer.css"

import "bootstrap/dist/css/bootstrap.min.css";

import account from "./../../images/account-setting.svg"
import order from "./../../images/my-orders.svg"

function Customer() {
    return (
        <div className="d-flex justify-content-center bg-pearl">
            <div className="w-20 frame_customer text-uppercase d-flex flex-column justify-content-center align-items-center align-self-start bg-white">
                <p className="py-1-v m-0">my account</p>
                <hr className="line_sep m-0"></hr>
                <div className="d-flex flex-column">
                    <div className="d-flex align-items-center py-1-v">
                        <img src={account}></img>
                        <p className="m-0">account setting</p>
                    </div>
                    <div className="d-flex align-items-center py-1-v">
                        <img src={order}></img>
                        <p className="m-0">my orders</p>
                    </div>
                    {/* color active อยู่ใน .menu */}
                </div>
            </div>

            <div className="w-60 frame_customer bg-white px-2-v">
                <p className="text-uppercase py-1-v m-0">manage my account</p>
                <hr className="line_sep1 m-0"></hr>
                <form>
                    <div className="mt-1-v ml-2-v row">
                        <label for="staticUsername" className="col-sm-2 pl-0 col-form-label text-uppercase text-right">username :</label>
                        <div className="col-sm-6">
                            <input type="text" readonly className="form-control-plaintext" id="staticUsername" value="tintoki321" />
                        </div>
                    </div>
                    <div className="mt-1-v ml-2-v row">
                        <label className="col-sm-2 pl-0 col-form-label text-uppercase text-right">name :</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="mt-1-v ml-2-v row">
                        <label className="col-sm-2 pl-0 col-form-label text-uppercase text-right">email :</label>
                        <div className="col-sm-6">
                            <input type="email" className="form-control" />
                        </div>
                    </div>
                    <div className="mt-1-v ml-2-v row">
                        <label className="col-sm-2 pl-0 col-form-label text-uppercase text-right">number :</label>
                        <div className="col-sm-6">
                            <input type="number" className="form-control" />
                        </div>
                    </div>
                    <div className="mt-1-v ml-2-v row">
                        <label className="col-sm-2 pl-0 col-form-label text-uppercase text-right">display name :</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="mt-1-v ml-2-v row">
                        <label className="col-sm-2 pl-0 col-form-label text-uppercase text-right">dob :</label>
                        <div className="col-sm-6 d-flex">
                            <input type="number" className="form-control mr-1-v" />
                            <input type="number" className="form-control mr-1-v" />
                            <input type="number" className="form-control mr-1-v" />
                        </div>
                    </div>
                </form>

                <div className="d-flex justify-content-center m-2-v">
                    <button type="submit" className="save_account text-white">SAVE</button>
                </div>
            </div>
        </div>
    );
}
export default Customer;