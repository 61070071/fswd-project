import React, { useState } from "react";
import "../../App.css"
import "./Promotions.css";
import Img_Promotions from "../../images/Group_429.svg"
import Img_Sale from "../../images/585680404f6ae202fedf26f0.svg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import ProductSale from "../../components/Products_Sale/Products_Sale";
import PromotionProduct from "../../components/PromotionProduct/PromotionProduct"
function Promotion() {
    const ProSale = [{
        img: Img_Sale,
        promotion: "HOT SALE !",
        name: "JEANS JACKET",
        price: "2,807 ฿",
        price_pro: "1,752 ฿"
        
    },
    {
        img: Img_Sale,
        promotion: "HOT SALE !",
        name: "JEANS JACKET BLACK",
        price: "2,702 ฿",
        price_pro: "1,450 ฿"
    },
    {
        img: Img_Sale,
        promotion: "HOT SALE !",
        name: "JEANS JACKET RED",
        price: "2,350 ฿",
        price_pro: "1,500 ฿"
        
    },
    {
        img: Img_Sale,
        promotion: "HOT SALE !",
        name: "JEANS JACKET GREEN",
        price: "2,570 ฿",
        price_pro: "1,650 ฿"
    },
    {
        img: Img_Sale,
        promotion: "HOT SALE !",
        name: "JEANS JACKET BLUE",
        price: "2,621 ฿",
        price_pro: "1,850 ฿"
        
    }]
    return (
        <div className="w-90 mx-auto">
            <p className="color-main mt-0-5-v">HOME &gt; PROMOTIONS</p>
            <div className="w-100">
                <img className="w-100" src={Img_Promotions} />
            </div>
            <div className="w-90 mt-2-5-v d-flex justify-content-center flex-wrap mx-auto">
                <span className="mx-auto">HOT DEAL</span>
                <div className="w-100 d-flex flex-wrap">
                    {
                        ProSale.map(function (element, index) {
                            return <div className="w-20">
                                <ProductSale data={element} />
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="w-90 mt-1-v d-flex justify-content-center flex-wrap mx-auto">
                <span className="mx-auto">BUY MORE FOR CHEAPER</span>
                <div className="w-100 d-flex flex-wrap">
                    {
                        ProSale.map(function (element, index) {
                            return <div className="w-20">
                                <PromotionProduct data={element} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Promotion;