import React from "react";
import "./AdminPromotionCreate.css"
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import Tag from "../../../images/icon-tag.svg";
import SaleTag from "../../../images/sale-tag.svg";
import ShopBag from "../../../images/shop-bag.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function AdminPromotionCreate({ data }) {
    const { productId } = useParams();
    console.log(productId);
    return (
        <div className="d-flex flex-wrap">
            <div className="w-15">
                <AdminNavBar  page={3}/>
            </div>
            <div className="w-85 d-flex flex-wrap align-items-center bg-main">
                <div className="bg-white mx-auto w-90 d-flex align-items-center flex-wrap">
                    <div className="w-90 mx-auto d-flex justify-content-center align-items-center py-1-v mt-1-v">
                        <span className="color-second fs-1-2-v">SELECT PROMOTION</span>
                        <img alt="" src={Tag} className="ml-1-v image-tag-promotion" />
                    </div>
                    <div className="w-70 mx-auto d-flex py-3-v">
                        <Link to={`/admin/promotion/create/onsale/${productId}`} onClick={() => window.location.href=`/admin/promotion/create/onsale/${productId}`} className="w-50 justify-content-center d-flex flex-wrap">
                            <div className="w-70 d-flex justify-content-center position-relative bd-select-promotion align-items-center">
                                <img alt="" src={SaleTag} className="z-index-1 image-select-promotion" />
                                <div className="w-100 h-100 position-absolute bg-select-promotion" />
                            </div>
                            <span className="w-100 text-center mt-1-v fs-1-v color-second">ON SALE</span>
                        </Link>
                        <Link to={`/admin/promotion/create/getfree/${productId}`} onClick={() => window.location.href=`/admin/promotion/create/getfree/${productId}`} className="w-50 justify-content-center d-flex flex-wrap">
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