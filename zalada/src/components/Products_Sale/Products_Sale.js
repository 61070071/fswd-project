import React from "react";
import "./Products_Sale.css"
function Products_Sale({ data }) {
    const newPrice = data.price - ((data.discount * data.price) / 100)
    return (
        <div className="d-flex flex-wrap justify-content-center box_product_promotion">
            <img alt="" src={data.photourl} />
            <span className="d-flex mx-auto justify-content-center box_promotion">SALE {data.discount} %</span>
            <span className="d-flex flex-100 justify-content-center mt-0-5-v">{data.productname}</span>
            <span className="d-flex flex-100 justify-content-center price_origin mt-0-5-v">{data.price} ฿</span>
            <span className="d-flex flex-100 justify-content-center text_price_pro color-main">{newPrice} ฿</span>
        </div>
    );
}


export default Products_Sale;
