import React, { useState } from "react";
import './AdminAssignPromotion.css'
function AddAssignPromotion({ data }) {
    return (
        <div className="w-100 d-flex mt-1-v box-add-list-product justify-content-between">
            <div className="d-flex align-items-center">
                <input type="checkbox" className="select_product"></input>
                <div className="image-add-product-in-list">
                    <img alt="" src={data.image} />
                </div>
                <div className="d-flex flex-wrap ml-1-v">
                    <span className="w-100 fs-1-v">#{data.id}</span>
                    <span className="w-100 color-second fs-1-v">{data.name}</span>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <span className="fs-1-v pr-3-v">IN STOCK : {data.stock}</span>
            </div>
        </div>
    );
}
export default AddAssignPromotion;