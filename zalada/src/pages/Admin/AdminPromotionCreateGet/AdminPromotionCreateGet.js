import React from "react";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import { Link } from "react-router-dom";
import Plus from "../../../images/plus-green.svg";
import Calendar from "../../../images/icon-calendar.svg";
import AdminAssignPromotion from "../../../components/AddAssignPromotion/AddAssignPromotion";
function AdminPromotionCreateGet() {
    const pro_get = [{
        product_no: "#001",
        product_name: "LEATHER JACKET",
        product_category: "BAG",
        pro_buy: "-",
        pro_discount: "-",
        pro_start: "-",
        pro_end: "-"
    },
    {
        product_no: "#002",
        product_name: "LEATHER JACKET",
        product_category: "BAG",
        pro_buy: "-",
        pro_discount: "-",
        pro_start: "-",
        pro_end: "-"
    }]
    return (
        <div className="d-flex flex-wrap">
            <div className="w-15">
                <AdminNavBar page={3} />
            </div>
            <div className="w-85 d-flex flex-wrap align-items-center bg-main">
                <div className="bg-white mx-auto w-90 d-flex align-items-start flex-wrap">
                    <div className="w-100 box-add-product">
                        <div className="w-100 mx-auto d-flex top-list-add-promotion py-0-5-v">
                            <div className="w-50">
                                <span className="color-second fs-1-v">PROMOTION ASSIGN</span>
                            </div>
                        </div>

                        <div className="w-100 h-30-v">
                            {
                                pro_get.map(function (element, index) {
                                    return <AdminAssignPromotion data={element} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPromotionCreateGet;