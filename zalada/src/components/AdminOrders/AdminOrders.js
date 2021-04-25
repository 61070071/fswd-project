import React from "react";
import "../../pages/Admin/Order/Order.css";

import delOrder from "./../../images/del-admin.svg"

function AdminOrders() {
    return (
        <div className="data_order row align-items-center mb-2">
            <div className="col-2">
                <input type="checkbox" className="select_order"></input>
            </div>
            <div className="col-5">
                <p className="m-0">#7355608</p>
            </div>
            <div className="col-2 text-center">
                <p className="m-0">8</p>
            </div>
            <div className="col-2 text-center">
                <p className="m-0">1,120</p>
            </div>
            <div className="col-1">
                <img alt="" src={delOrder} className="img_del"></img>
            </div>
        </div>
    );
}

export default AdminOrders;