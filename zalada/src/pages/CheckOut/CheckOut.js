import "./CheckOut.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// import CartLogo from "../../images/shopping-cart-black-shape.svg"

function CheckOut() {
   return (
      <div className="bg-cloud h-100-v">
         <div className="w-45 mx-auto">
            <p className="cart_header">ACCOUNT INFORMATION</p>
            <div className="form_info">
               <div className="">
                  <div>
                     <label className="form-label fs-1-v">Firstname</label>
                     <input className="form-control mb-1-v" type="text" placeholder="Firstname"></input>
                  </div>
                  <div>
                     <label className="form-label fs-1-v">Phone Number</label>
                     <input className="form-control mb-1-v" type="number" placeholder="+66"></input>
                  </div>
                  <div>
                     <label className="form-label fs-1-v">Address</label>
                     <textarea className="form-control mb-1-v" type="text" placeholder="Address..." rows="3"></textarea>
                  </div>
                  <div className="address d-flex justify-content-between mb-1-v">
                     <div>
                        <p className="fs-1-v m-0">Province</p>
                        <select className="dropdown_address">
                           <option></option>
                        </select>
                     </div>
                     <div>
                        <p className="fs-1-v m-0">District</p>
                        <select className="dropdown_address">
                           <option></option>
                        </select>
                     </div>
                     <div>
                        <p className="fs-1-v m-0">Sub-District</p>
                        <select className="dropdown_address">
                           <option></option>
                        </select>
                     </div>
                  </div>
                  <div>
                     <label className="form-label fs-1-v">Post number</label>
                     <input className="form-control mb-2-v w-25" type="number" placeholder="10510" rows="4"></input>
                  </div>
                  <div>
                     <button className="btn btn_accountInfo w-100">CONTINUE</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CheckOut;