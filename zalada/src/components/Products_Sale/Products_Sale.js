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
        <div className="d-flex flex-wrap justify-content-center box_product">
            <img src={data.img}/>
            <span className="d-flex mx-auto justify-content-center box_promotion">{data.promotion}</span>
            <span className="d-flex flex-100 justify-content-center text_name">{data.name}</span>
            <span className="d-flex flex-100 justify-content-center price_origin">{data.price}</span>
            <span className="d-flex flex-100 justify-content-center text_price color-main">{data.price_pro}</span>
          </div>
    );
}


export default Products_Sale;
