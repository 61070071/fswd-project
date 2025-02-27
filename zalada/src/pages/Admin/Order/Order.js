import React from "react";
import "./Order.css"
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar"
import "bootstrap/dist/css/bootstrap.min.css";
import AdminOrders from "../../../components/AdminOrders/AdminOrders";
// import { useQuery } from '@apollo/client';
function Order() {
    // const { loading, error, data } = useQuery(PRODUCTS_QUERY)
    return (
        <div className="d-flex flex-wrap">
            <div className="w-15">
                <AdminNavBar page={1}/>
            </div>
            <div className="w-85 d-flex flex-column bg-gray">
                <div className="order_dashboard w-90 bg-white">
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="text-uppercase color-second m-0">DashBoard</p>
                        </div>
                        <div className="d-flex">
                            <p className="m-0">Display by : </p>
                            <select className="select_display">
                                <option value="ALL">RECENTLY</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        </div>
                    </div>

                    <hr className="m-0"></hr>

                    <div className="row mt-3">
                        <div className="col-2">
                            <p>SELECT</p>
                        </div>
                        <div className="col-5">
                            <p>ORDER NO.</p>
                        </div>
                        <div className="col-2 text-center">
                            <p>PRODUCT (QTY)</p>
                        </div>
                        <div className="col-2 text-center">
                            <p>TOTAL PRICE</p>
                        </div>
                        <div className="col-1">
                        </div>
                    </div>
                    <AdminOrders />

                    <div className="page_order d-flex justify-content-center color-second">
                        <div className="btn_page">
                            <p className="m-0">1</p>
                        </div>
                        <div className="btn_page">
                            <p className="m-0">2</p>
                        </div>
                        <div className="btn_page">
                            <p className="m-0">3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
