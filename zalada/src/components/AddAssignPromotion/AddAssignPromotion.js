import React, { useState } from "react";
import './AddAssignPromotion.css'
import { Link } from "react-router-dom";
function AddAssignPromotion({ data }) {
    return (
        <Link to={`/admin/promotion/create/${data._id}`} onClick={() => window.location.href=`/admin/promotion/create/${data._id}`} className="w-50">
        <div className="w-100 d-flex mt-1-v box-add-list-product justify-content-between">
            <div className="d-flex align-items-center">
                <div className="mr-0-5-v">
                    <img alt="" src={data.photourl[0]} className="img_product_promotion" />
                </div>
                <div className="d-flex flex-wrap ml-1-v">
                    <span className="w-100 fs-1-v">#{data._id}</span>
                    <span className="w-100 color-second fs-1-v">{data.productname}</span>
                </div>
            </div>
            <div className="w-15 d-flex align-items-center justify-content-center">
                <span className="fs-1-v pr-3-v">IN STOCK : {data.quantity}</span>
            </div>
        </div>
        </Link>
    );
}
export default AddAssignPromotion;