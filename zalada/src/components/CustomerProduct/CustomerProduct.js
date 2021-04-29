import React from "react";
import "../../pages/Customer/Order_detail/Order_detail.css"

import "bootstrap/dist/css/bootstrap.min.css";

import brownShirt from "../../images/brown_shirt.svg";

function CustomerProduct() {
    return (
        <div className="row p-1-v align-items-center">
            <div className="col-7 d-flex align-items-center">
                <img src={brownShirt} className="img_product_customer"></img>
                <div className="ml-2-v">
                    <p className="mb-0-5-v">Modern Pastel Lamp</p>
                    <div className="d-flex align-items-center">
                        <p className="fs-small m-0">color : pink</p>
                        <div className="product_color ml-1-v"></div>
                    </div>
                </div>
            </div>
            <div className="col-3 text-center">
                <p className="m-0">1</p>
            </div>
            <div className="col-2 text-right">
                <p className="m-0 fs-large color-second">฿ 270</p>
            </div>
        </div>
    );
}
export default CustomerProduct;