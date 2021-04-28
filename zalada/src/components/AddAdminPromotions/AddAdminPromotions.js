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
                    <span className="w-100">#{data.id}</span>
                    <span className="w-100 color-second">{data.name}</span>
                </div>

            </div>
            <div className="w-50 d-flex align-items-center justify-content-center">
                <span>IN STOCK : {data.stock}</span>
            </div>
            <div className="w-25 d-flex align-items-center">
                <div className="d-flex w-50 flex-wrap flex-column align-items-end">
                    <span>CONDITION :</span>
                    <span>GET :</span>
                    <span>PROMOTION START :</span>
                    <span>PROMOTION END :</span>
                </div>
                <div className="w-50 d-flex flex-column justify-content-end ml-1-v">
                <span className="color-no-4">{data.condition}</span>
                    <span className="color-no-4">{data.get}</span>
                    <span className="color-second">{data.promotionStart}</span>
                    <span className="color-second">{data.promotionEnd}</span>
                </div>
            </div>
            <div className="d-flex w-5 justify-content-end align-items-center">
                <img alt="" src={ThirdDot}/>
            </div>
        </div>
    );
}
export default AddAdminPromotions;