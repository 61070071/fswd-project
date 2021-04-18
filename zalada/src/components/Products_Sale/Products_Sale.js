import React from "react";
import "./Products_Sale.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
function Products_Sale({ data }) {
    return (
        <div className="d-flex flex-wrap justify-content-center box_product_promotion">
            <img src={data.img}/>
            <span className="d-flex mx-auto justify-content-center box_promotion">{data.promotion}</span>
            <span className="d-flex flex-100 justify-content-center mt-0-5-v">{data.name}</span>
            <span className="d-flex flex-100 justify-content-center price_origin mt-0-5-v">{data.price}</span>
            <span className="d-flex flex-100 justify-content-center text_price_pro color-main">{data.price_pro}</span>
          </div>
    );
}


export default Products_Sale;
