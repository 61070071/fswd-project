import React from "react";
import "./PromotionProduct.css"
import { Link } from "react-router-dom";
function PromotionProduct({ data }) {
    console.log(data._id, '1');
    return (
        <Link to={`/promotions/free/${data._id}`} onClick={() => window.location.href=`/promotions/free/${data._id}`}>
            <div className="d-flex flex-wrap justify-content-center box_product">
            <img alt="" src={data.photourl} />
            <span className="d-flex mx-auto justify-content-center box_pro">Buy {data.buy} Free {data.free}</span>
            <span className="d-flex flex-100 justify-content-center text_name">{data.productname}</span>
            <span className="d-flex flex-100 justify-content-center text_price color-main">{data.price} ฿</span>
        </div>
        </Link>
    );
}


export default PromotionProduct;
