import React from "react";
import "./AdminPromotionCreateOnSale.css"
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import NamePageAdmin from "../../../components/NamePageAdmin/NamePageAdmin";
import Plus from "../../../images/plus-green.svg";
import Calendar from "../../../images/icon-calendar.svg";
function AdminPromotionCreateOnSale() {
    return (
        <div className="d-flex flex-wrap">
            <div className="w-15">
                <AdminNavBar />
            </div>
            <div className="w-85 d-flex flex-wrap align-items-start bg-main">
                <NamePageAdmin />
                <div className="bg-white mx-auto w-90 d-flex align-items-start flex-wrap">
                    <div className="w-100 box-add-product">
                        <div className="w-100 mx-auto d-flex top-list-add-promotion py-0-5-v">
                            <div className="w-50">
                                <span className="color-second">PROMOTION ASSIGN</span>
                            </div>
                            <div className="w-50 d-flex justify-content-end">
                                <button className="btn-add-promotion-on-sale color-second font-weight-bold d-flex align-items-center">ADD PRODUCT <img alt="" src={Plus} /></button>
                            </div>
                        </div>
                        <form>
                            <div className="w-100 d-flex align-items-center">
                                <div className="w-20 d-flex align-items-center py-1-v">
                                    <span className="color-second w-40 fs-0-8-v">DISCOUNT :</span>
                                    <input type="text" className="w-50 input-admin-promotion-sale" />
                                </div>
                                <div className="w-25 d-flex align-items-center py-1-v">
                                    <span className="color-second w-35 text-center fs-0-7-v">PROMOTION <br />START :</span>
                                    <div className="w-60 position-relative">
                                        <input type="text" className="w-100 input-admin-promotion-sale" />
                                        <img alt="" src={Calendar} className="image-calender position-absolute" />
                                    </div>
                                </div>
                                <div className="w-25 d-flex align-items-center py-1-v">
                                    <span className="color-second w-35 text-center fs-0-7-v">PROMOTION <br />END :</span>
                                    <div className="w-60 position-relative">
                                        <input type="text" className="w-100 input-admin-promotion-sale" />
                                        <img alt="" src={Calendar} className="image-calender position-absolute" />
                                    </div>
                                </div>
                                <button className="h-25 font-weight-bold color-white border-0 btn-promotion-apply fs-0-7-v" type="submit">APPLY ALL</button>
                            </div>
                        </form>
                        <div className="w-100">
                            <div className="w-100 line-bottom-gray">
                                <div className="w-95 d-flex align-items-center">
                                    <div className="w-10 d-flex justify-content-center mx-auto">
                                        <span className="py-0-5-v fs-0-7-v">PRODUCT NO.</span>
                                    </div>
                                    <div className="w-10 d-flex justify-content-center mx-auto">
                                        <span className="py-0-5-v fs-0-7-v">PRODUCT NAME</span>
                                    </div>
                                    <div className="w-10 d-flex justify-content-center mx-auto">
                                        <span className="py-0-5-v fs-0-7-v text-center">PRODUCT<br />CATAGORIES</span>
                                    </div>
                                    <div className="w-10 d-flex justify-content-center mx-auto">
                                        <span className="py-0-5-v fs-0-7-v">DISCOUNT</span>
                                    </div>
                                    <div className="w-10 d-flex justify-content-center mx-auto">
                                        <span className="py-0-5-v fs-0-7-v text-center">PROMOTION<br />START</span>
                                    </div>
                                    <div className="w-10 d-flex justify-content-center mx-auto">
                                        <span className="py-0-5-v fs-0-7-v text-center">PROMOTION<br />END</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 h-30-v">
                                <span>test</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPromotionCreateOnSale;