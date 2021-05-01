import React from "react";
import "./AdminPromotionCreate.css"
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import NamePageAdmin from "../../../components/NamePageAdmin/NamePageAdmin";
import Tag from "../../../images/icon-tag.svg";
import SaleTag from "../../../images/sale-tag.svg";
import ShopBag from "../../../images/shop-bag.svg";
import { Link } from "react-router-dom";
function AdminPromotionCreate() {
    return (
        <div className="d-flex flex-wrap">
            <div className="w-15">
                <AdminNavBar />
            </div>
            <div className="w-85 d-flex flex-wrap align-items-start bg-main">
                <NamePageAdmin />
                <div className="bg-white mx-auto w-90 d-flex align-items-start flex-wrap">
                    <div className="w-90 mx-auto d-flex justify-content-center align-items-center py-1-v mt-1-v">
                        <span className="color-second fs-1-2-v">SELECT PROMOTION</span>
                        <img alt="" src={Tag} className="ml-1-v image-tag-promotion" />
                    </div>
                    <div className="w-70 mx-auto d-flex py-3-v">
                        <Link to="/admin/promotions/create/onsale" className="w-50 justify-content-center d-flex flex-wrap">
                            <div className="w-70 d-flex justify-content-center position-relative bd-select-promotion align-items-center">
                                <img alt="" src={SaleTag} className="z-index-1 image-select-promotion" />
                                <div className="w-100 h-100 position-absolute bg-select-promotion" />
                            </div>
                            <span className="w-100 text-center mt-1-v fs-1-v color-second">ON SALE</span>
                        </Link>
                        <Link to="/admin/promotions/create/getfree" className="w-50 justify-content-center d-flex flex-wrap">
                            <div className="w-70 d-flex justify-content-center position-relative bd-select-promotion align-items-center">
                                <img alt="" src={ShopBag} className="z-index-1 image-select-promotion" />
                                <div className="w-100 h-100 position-absolute bg-select-promotion" />
                            </div>
                            <span className="w-100 text-center mt-1-v fs-1-v color-second">BUY AND GET MORE</span>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AdminPromotionCreate;