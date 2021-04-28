import React from "react";
import "./PromotionProduct.css"
import { Link } from "react-router-dom";
function PromotionProduct({ data }) {
    return (
        <Link to="/details"><div className="d-flex flex-wrap justify-content-center box_product">
            <img alt="" src={data.photourl[0]} />
            <span className="d-flex mx-auto justify-content-center box_pro">{data.description}</span>
            <span className="d-flex flex-100 justify-content-center text_name">{data.productname}</span>
            <span className="d-flex flex-100 justify-content-center text_price color-main">{data.price} ฿</span>
        </div>
        </Link>
    );
}


export default PromotionProduct;
