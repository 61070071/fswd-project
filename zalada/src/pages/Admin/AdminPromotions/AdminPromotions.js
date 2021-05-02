import "./AdminPromotions.css";
import React from "react";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar"
import Plus from "../../../images/circle-plus.svg"
import AddAdminPromotions from "../../../components/AddAdminPromotions/AddAdminPromotions"
import AddAdminPromotionOnsale from "../../../components/AddAdminPromotionOnsale/AddAdminPromotionOnsale"
import Shirt from "../../../images/brown_shirt.svg"
import SearchLogo from "../../../images/search.svg"
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client'
import { PROMOTIONS_FREE_QUERY, PROMOTIONS_SALE_QUERY } from '../../../graphql/productsOGQuery.js'

function AdminPromotions() {
    const dataSale = useQuery(PROMOTIONS_SALE_QUERY).data
    const dataFree = useQuery(PROMOTIONS_FREE_QUERY).data
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
                                <Link to="/admin/promotion/create">
                                    <div className="w-100 d-flex justify-content-end">
                                        <button className="btn-add-product-admin color-white font-weight-bold d-flex align-items-center">ADD PROMOTION <img alt="" src={Plus} /></button>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-100 overflow-list-promotion">
                                {
                                    dataSale?.promotionSales.map(function (element, index) {
                                        return <AddAdminPromotions data={element} />
                                    })
                                }
                                {
                                    dataFree?.promotionFrees.map(function (element, index) {
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