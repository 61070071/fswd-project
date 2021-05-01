import "./AssignPromotion.css";
import React from "react";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar"
import NamePageAdmin from "../../../components/NamePageAdmin/NamePageAdmin"
import AddAssignPromotion from "../../../components/AdminAssignPromotion/AdminAssignPromotion"

import Shirt from "../../../images/brown_shirt.svg"
import SearchLogo from "../../../images/search.svg"

function AssignPromotions() {
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
                <NamePageAdmin page={3} />
                <div className="w-100 mx-auto h-100 bg-main">
                    <div className="w-90 mx-auto bg-white ">
                        <div className="w-100 box-add-product mt-2-v">
                            <div className="w-100 d-flex bar_select d-flex align-items-end">
                                <div className="w-30">
                                    <span className="color-second">PRODUCT</span>
                                </div>
                                <div className="w-40">
                                    <div className="d-flex align-items-center justify-content-end mr-2-v">
                                        <img alt="" className="search_input position-absolute" src={SearchLogo} />
                                        <input className="input-nav-bar" type="text" placeholder="Search and hit enter..." />
                                    </div>
                                </div>
                                <div className="w-50 d-flex">
                                    <div className="d-flex align-items-center">
                                        <span className="fs-0-8-v">PRODUCT TYPE : </span>
                                        <select className="select_display mb-0 fs-0-8-v">
                                            <option value="ALL">ALL</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center ml-2-v">
                                        <span className="fs-0-8-v">SORT BY : </span>
                                        <select className="select_display mb-0 fs-0-8-v">
                                            <option value="ALL">RECENTLY ADD</option>
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
                                        return <AddAssignPromotion data={element} />
                                    })
                                }
                            </div>
                        </div>

                    </div>
                    <div className="btn-assign-promotion w-95 d-flex justify-content-end py-1-v">
                        <button className="btn-add-assign-admin color-white font-weight-bold d-flex align-items-center">ASSIGN PROMOTION</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AssignPromotions;