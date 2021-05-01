import React from "react";
import "./Admin.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import NamePageAdmin from "../../../components/NamePageAdmin/NamePageAdmin";
import Cart from "../../../images/icon-cart.svg";
function Admin() {
    const data = [
        {
            name: 'JANUARY',
            pv: 4000
        },
        {
            name: 'FEBRUARY',
            pv: 3000
        },
        {
            name: 'MARCH',
            pv: 2000
        },
        {
            name: 'APRIL',
            pv: 2780
        }]

    return (
        <div className="d-flex flex-wrap">
            <div className="w-15">
                <AdminNavBar page={0} />
            </div>
            <div className="w-85 d-flex flex-wrap align-items-start bg-main">
                <NamePageAdmin page={0} />
                <div className="w-95 mx-auto h-25 d-flex justify-content-center color-second align-items-center">
                    <div className="w-20 h-50 d-flex mx-auto  box-desc-dashboard">
                        <div className="w-25 d-flex justify-content-center align-items-center bg-second ">
                            <img alt="" src={Cart} />
                        </div>
                        <div className="w-75 d-flex flex-wrap h-100 py-0-5-v bg-white">
                            <div className="w-90 mx-auto h-10 d-flex mt-0-1-v">
                                <span className="fs-0-6-v">TOTAL ORDER</span>
                            </div>
                            <div className="w-90 mx-auto h-90 d-flex">
                                <div className="w-60 mx-auto d-flex justify-content-end align-items-end h-100">
                                    <span className="fs-2-v">84</span>
                                </div>
                                <div className="w-30 d-flex justify-content-center align-items-end h-100">
                                    <span className="fs-0-6-v py-0-5-v">ORDER</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-20 h-50 d-flex mx-auto box-desc-dashboard">
                        <div className="w-25 d-flex justify-content-center align-items-center bg-second ">
                            <img alt="" src={Cart} />
                        </div>
                        <div className="w-75 d-flex flex-wrap h-100 py-0-5-v bg-white">
                            <div className="w-90 mx-auto h-10 d-flex mt-0-1-v">
                                <span className="fs-0-6-v">TODAY ORDER</span>
                            </div>
                            <div className="w-90 mx-auto h-90 d-flex">
                                <div className="w-60 mx-auto d-flex justify-content-end align-items-end h-100">
                                    <span className="fs-2-v">84</span>
                                </div>
                                <div className="w-30 d-flex justify-content-center align-items-end h-100">
                                    <span className="fs-0-6-v py-0-5-v">ORDER</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-20 h-50 d-flex mx-auto box-desc-dashboard">
                        <div className="w-25 d-flex justify-content-center align-items-center bg-second ">
                            <img alt="" src={Cart} />
                        </div>
                        <div className="w-75 d-flex flex-wrap h-100 py-0-5-v bg-white">
                            <div className="w-90 mx-auto h-10 d-flex mt-0-1-v">
                                <span className="fs-0-6-v">TOTAL PRODUCTS</span>
                            </div>
                            <div className="w-90 mx-auto h-90 d-flex">
                                <div className="w-60 mx-auto d-flex justify-content-end align-items-end h-100">
                                    <span className="fs-2-v">24</span>
                                </div>
                                <div className="w-30 d-flex justify-content-center align-items-end h-100">
                                    <span className="fs-0-6-v py-0-5-v">ORDER</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-20 h-50 d-flex mx-auto box-desc-dashboard">
                        <div className="w-25 d-flex justify-content-center align-items-center bg-second ">
                            <img alt="" src={Cart} />
                        </div>
                        <div className="w-75 d-flex flex-wrap h-100 py-0-5-v bg-white">
                            <div className="w-90 mx-auto h-10 d-flex">
                                <span className="fs-0-6-v">TOTAL PRODUCTS</span>
                            </div>
                            <div className="w-90 mx-auto h-90 d-flex">
                                <div className="w-60 mx-auto d-flex justify-content-end align-items-end h-100">
                                    <span className="fs-2-v">24</span>
                                </div>
                                <div className="w-30 d-flex justify-content-center align-items-end h-100">
                                    <span className="fs-0-6-v py-0-5-v">ORDER</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ResponsiveContainer width="90%" height="50%" className="mx-auto bg-white mb-1-v">
                    <LineChart
                        width={1300}
                        height={500}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#527022"
                            activeDot={{ r: 5 }}
                        />
                        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}

export default Admin;