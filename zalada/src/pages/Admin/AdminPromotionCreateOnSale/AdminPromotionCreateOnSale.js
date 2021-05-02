import React from "react";
import { Link } from "react-router-dom";
import "./AdminPromotionCreateOnSale.css"
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import Plus from "../../../images/plus-green.svg";
import Calendar from "../../../images/icon-calendar.svg";
import AddPromotionOnSale from "../../../components/AddPromotionOnSale/AddPromotionOnSale";
import { useQuery } from '@apollo/client'
import { PRODUCTS_QUERY } from '../../../graphql/productsOGQuery.js'
import AddAssignPromotion from "../../../components/AddAssignPromotion/AddAssignPromotion"
function AdminPromotionCreateOnSale() {
    const { loading, error, data } = useQuery(PRODUCTS_QUERY)
    const products = data?.products

    return (
        <div className="d-flex flex-wrap">
            <div className="w-15">
                <AdminNavBar page={3} />
            </div>
            <div className="w-85 d-flex flex-wrap align-items-start bg-main">
                <div className="bg-white mx-auto mt-2-v w-90 d-flex align-items-start flex-wrap">
                    <div className="w-100 box-add-product">
                        <div className="w-100 mx-auto d-flex top-list-add-promotion py-0-5-v">
                            <div className="w-50">
                                <span className="color-second fs-1-v">PROMOTION ASSIGN</span>
                            </div>
                        </div>

                        <div className="product_overflow w-100 h-30-v">
                            {
                                products.map(function (element, index) {
                                    return <AddAssignPromotion data={element} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPromotionCreateOnSale;