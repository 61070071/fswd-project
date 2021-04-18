import React from "react";
import "./PromotionProduct.css"

function PromotionProduct({ data }) {
    return (
        <div className="d-flex flex-wrap justify-content-center box_product">
            <img alt="" src={data.img}/>
            <span className="d-flex mx-auto justify-content-center box_pro">{data.promotion}</span>
            <span className="d-flex flex-100 justify-content-center text_name">{data.name}</span>
            <span className="d-flex flex-100 justify-content-center text_price color-main">{data.price}</span>
          </div>
    );
}


export default PromotionProduct;
