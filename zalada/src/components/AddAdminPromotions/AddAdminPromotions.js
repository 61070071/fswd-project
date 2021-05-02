import React, { useState } from "react";
import "./AddAdminPromotions.css";
import ThirdDot from "../../images/third-dot.svg"
function AddAdminPromotions({ data }) {
    return (
        <div className="w-100 d-flex mt-1-v box-add-list-product">
            <div className="w-20 d-flex align-items-center">
                <div className="image-add-product-in-list">
                    <img alt="" src={data.image} />
                </div>
                <div className="d-flex flex-wrap ml-1-v">
                    <span className="w-100 fs-1-v">#{data.id}</span>
                    <span className="w-100 color-second fs-0-8-v">{data.name}</span>
                </div>

            </div>
            <div className="w-50 d-flex align-items-center justify-content-center">
                <span className="fs-1-v">IN STOCK : {data.stock}</span>
            </div>
            <div className="w-30 d-flex align-items-center justify-content-end py-0-5-v">
                <div className="d-flex  w-50 flex-wrap flex-column align-items-end">
                    <span className="fs-0-9-v">TOTAL DEALS :</span>
                </div>
                <div className="w-30 d-flex flex-column justify-content-end ml-1-v">
                    <span className="color-no-4 fs-0-9-v">{data.totalSave}</span>
                </div>
            </div>
            <div className="d-flex w-5 justify-content-end align-items-center">
                <img alt="" src={ThirdDot} />
            </div>
        </div>
    );
}
export default AddAdminPromotions;