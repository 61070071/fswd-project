import "./AdminPromotions.css";
import React from "react";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar"
import Plus from "../../../images/circle-plus.svg"
import AddAdminPromotions from "../../../components/AddAdminPromotions/AddAdminPromotions"
import AddAdminPromotionOnsale from "../../../components/AddAdminPromotionOnsale/AddAdminPromotionOnsale"
import Shirt from "../../../images/brown_shirt.svg"
import SearchLogo from "../../../images/search.svg"
import { Link } from "react-router-dom";
function AdminPromotions() {
    const products = [{
        id: "001",
        name: "LEATHER JACKET",
        image: Shirt,
        stock: 12,
        condition: "BUY 2",
        get: "1",
        totalDeals: "30%",
        totalSave: "30% OFF",
        promotionStart: "12 / 5 / 2564",
        promotionEnd: "13 / 5 / 2564"
    },
    {
        id: "002",
        name: "LEATHER JACKET",
        image: Shirt,
        stock: 13,
        condition: "BUY 2",
        get: "1",
        totalDeals: "30%",
        totalSave: "30% OFF",
        promotionStart: "10 / 5 / 2564",
        promotionEnd: "11 / 5 / 2564"
    },
    {
        id: "003",
        name: "LEATHER JACKET",
        image: Shirt,
        stock: 14,
        condition: "BUY 2",
        get: "1",
        totalDeals: "30%",
        totalSave: "30% OFF",
        promotionStart: "09 / 5 / 2564",
        promotionEnd: "14 / 6 / 2564"
    }]
    return (
        <div className="d-flex flex-wrap">
            <div className="w-15">
                <AdminNavBar page={3} />
            </div>
            <div className="w-85 d-flex flex-wrap align-items-start">
                <div className="w-100 mx-auto bg-main pb-2-v">
                    <div className="w-90 mx-auto bg-white ">

                        <div className="w-100 box-add-product">
                            <div className="w-100 d-flex bar_select d-flex align-items-end">
                                <div className="w-80">
                                    <span className="color-second">PRODUCT</span>
                                </div>
                                <Link to="/admin/promotions/create">
                                    <div className="w-100 d-flex justify-content-end">
                                        <button className="btn-add-product-admin color-white font-weight-bold d-flex align-items-center">ADD PROMOTION <img alt="" src={Plus} /></button>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-100 overflow-list-promotion">
                                {
                                    products.map(function (element, index) {
                                        return <AddAdminPromotions data={element} />
                                    })
                                }
                                {
                                    products.map(function (element, index) {
                                        return <AddAdminPromotionOnsale data={element} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminPromotions;