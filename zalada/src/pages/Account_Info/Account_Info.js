import "./Account_Info.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import CartLogo from "../../images/shopping-cart-black-shape.svg"

function Account_Info() {
  return (
      <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-8 mt-5 p-0">
                    <div className="d-flex align-items-center">
                        <p className="cart_header">ACCOUNT INFORMATION</p>
                    </div>

                    <div className="form_info mt-2 mb-5 d-flex flex-column justify-content-center align-items-center">
                        <div className="w-100">
                            <div>
                                <label className="form-label">Firstname</label>
                                <input className="form-control mb-3" type="text" placeholder="Firstname"></input>
                            </div>
                            <div>
                                <label className="form-label">Phone Number</label>
                                <input className="form-control mb-3" type="number" placeholder="+66"></input>
                            </div>
                            <div>
                                <label className="form-label">Address</label>
                                <textarea className="form-control mb-3" type="text" placeholder="Address..." rows="4"></textarea>
                            </div>

                            <div className="address d-flex justify-content-between mb-3">
                                <div>
                                    <p>Province</p>
                                    <select className="dropdown_address">
                                        <option></option>
                                    </select>
                                </div>
                                <div>
                                    <p>District</p>
                                    <select className="dropdown_address">
                                        <option></option>
                                    </select>
                                </div>
                                <div>
                                    <p>Sub-District</p>
                                    <select className="dropdown_address">
                                        <option></option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="form-label">Post number</label>
                                <input className="form-control mb-5 w-25" type="number" placeholder="10510" rows="4"></input>
                            </div>

                            <div>
                                <button className="btn btn_accountInfo w-100">CONTINUE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default Account_Info;