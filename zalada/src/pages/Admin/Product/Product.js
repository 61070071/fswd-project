import "./Product.css";
import React from "react";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar"
import Plus from "../../../images/circle-plus.svg"
import AddListProduct from "../../../components/AddListProduct/AddListProduct"
import { useQuery } from '@apollo/client'
import { PRODUCTS_QUERY } from '../../../graphql/productsOGQuery.js'
import { Link } from "react-router-dom";
function Product() {
    const { loading, error, data } = useQuery(PRODUCTS_QUERY)
    const products = data?.products
    return (
        <div className="d-flex flex-wrap">
            <div className="w-15">
                <AdminNavBar page={2} />
            </div>
            <div className="w-85 d-flex flex-wrap align-items-start">
                <div className="w-100 d-flex mx-auto h-90 bg-main py-1-v">
                    <div className="w-90 mx-auto bg-white ">
                        <Link to="/admin/product/create">
                            <div className="w-100 d-flex justify-content-end pb-1-v bg-main">
                                <button className="btn-add-product-admin color-white font-weight-bold d-flex align-items-center">ADD PRODUCT <img alt="" src={Plus} /></button>
                            </div>
                        </Link>
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
                            <div className="w-100 overflow-list-product">
                                {
                                    data?.products.map(function (element, index) {
                                        return <AddListProduct data={element} />
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

export default Product;