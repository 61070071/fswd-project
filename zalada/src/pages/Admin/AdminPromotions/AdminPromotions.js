import "./AdminPromotions.css";
import React from "react";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar"
import NamePageAdmin from "../../../components/NamePageAdmin/NamePageAdmin"
import Plus from "../../../images/circle-plus.svg"
import AddAdminPromotions from "../../../components/AddAdminPromotions/AddAdminPromotions"
import AddAdminPromotionOnsale from "../../../components/AddAdminPromotionOnsale/AddAdminPromotionOnsale"
import Shirt from "../../../images/brown_shirt.svg"

function AdminPromotions() {
    const products = [{
        id:"001",
        name:"LEATHER JACKET",
        image:Shirt,
        stock:12,
        condition:"BUY 2",
        get:"1",
        totalDeals: "30%",
        totalSave: "30% OFF",
        promotionStart:"12 / 5 / 2564",
        promotionEnd:"13 / 5 / 2564"
    },
    {
        id:"002",
        name:"LEATHER JACKET",
        image:Shirt,
        stock:13,
        condition:"BUY 2",
        get:"1",
        totalDeals: "30%",
        totalSave: "30% OFF",
        promotionStart:"10 / 5 / 2564",
        promotionEnd:"11 / 5 / 2564"
    },
    {
        id:"003",
        name:"LEATHER JACKET",
        image:Shirt,
        stock:14,
        condition:"BUY 2",
        get:"1",
        totalDeals: "30%",
        totalSave: "30% OFF",
        promotionStart:"09 / 5 / 2564",
        promotionEnd:"14 / 6 / 2564"
    }]
    return (
        <div className="d-flex flex-wrap">
            <div className="w-15">
                <AdminNavBar page={3}/>
            </div>
            <div className="w-85 d-flex flex-wrap align-items-start">
                <NamePageAdmin page={3}/>
                <div className="w-100 mx-auto h-100 bg-main">
                    <div className="w-90 mx-auto bg-white ">
                        <div className="w-100 d-flex justify-content-end py-1-v bg-main">
                            <button className="btn-add-product-admin color-white font-weight-bold d-flex align-items-center">ADD PRODUCT <img alt="" src={Plus} /></button>
                        </div>
                        <div className="w-100 box-add-product">
                            <div className="w-100 d-flex top-list-add-product">
                                <div className="w-55">
                                    <span className="color-second">PRODUCT</span>
                                </div>
                                <div className="w-45 d-flex">
                                    <div className="w-50">
                                        <span className="color-second">PRODUCT TYPE : </span>
                                        <select className="w-50 select-product">
                                            <option value="ALL">ALL</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                        </select>
                                    </div>
                                    <div className="w-50 d-flex justify-content-center align-items-center">
                                        <span className="color-second">SORT BY : </span>
                                        <select className="w-50 select-product">
                                            <option value="ALL">RENCENTLY</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100">
                                {
                                    products.map(function (element, index) {
                                        return <AddAdminPromotions data={element}/>
                                    })
                                }
                                {
                                    products.map(function (element, index) {
                                        return <AddAdminPromotionOnsale data={element}/>
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