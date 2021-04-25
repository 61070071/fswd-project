import React, { useState } from "react";
import "./AdminNavBar.css";
import logo from "../../images/admin-logo.svg"
import IconDashboard from "../../images/icon-dashboard.svg"
import IconOrders from "../../images/icon-cart.svg"
import IconProduct from "../../images/icon-package.svg"
import IconPromotions from "../../images/icon-pricetag.svg"
import { Link } from "react-router-dom";
function AdminNavBar() {
    const [selectPage, setSelectPage] = useState(0);
    const admin = {
        page: ["DASHBOARD", "ORDERS", "PRODUCT", "PROMOTIONS"],
        name: "THAPON CHANLAOR",
        image: "http://dummyimage.com/34x34/",
    }
    function handlePage(e) {
        setSelectPage(e);
    }
    return (
        <div className="d-flex">
            <div className="w-15 size-admin-nav d-flex flex-column">
                <div className="d-flex mx-auto h-20">
                    <img alt="" src={logo} />
                </div>
                <Link to="/admin">
                    <div className="w-100 d-flex align-items-center py-1-v position-relative" onClick={() => handlePage(0)}>
                        <div className="w-30 d-flex justify-content-center align-items-center">
                            <img alt="" src={IconDashboard} />
                        </div>
                        <span className="color-white">DASHBOARD</span>
                        {selectPage === 0 &&
                            <div className="active w-100 h-100 position-absolute"></div>
                        }
                    </div>
                </Link>
                <Link to="#">
                    <div className="w-100 d-flex align-items-center py-1-v position-relative" onClick={() => handlePage(1)}>
                        <div className="w-30 d-flex justify-content-center align-items-center">
                            <img alt="" src={IconOrders} />
                        </div>
                        <span className="color-white">ORDERS</span>
                        {selectPage === 1 &&
                            <div className="active w-100 h-100 position-absolute"></div>
                        }
                    </div>
                </Link>
                <Link to="#">
                    <div className="w-100 d-flex align-items-center py-1-v position-relative" onClick={() => handlePage(2)}>
                        <div className="w-30 d-flex justify-content-center align-items-center">
                            <img alt="" src={IconProduct} />
                        </div>
                        <span className="color-white">PRODUCT</span>
                        {selectPage === 2 &&
                            <div className="active w-100 h-100 position-absolute"></div>
                        }
                    </div>
                </Link>
                <Link to="#">
                    <div className="w-100 d-flex align-items-center py-1-v position-relative" onClick={() => handlePage(3)}>
                        <div className="w-30 d-flex justify-content-center align-items-center">
                            <img alt="" src={IconPromotions} />
                        </div>
                        <span className="color-white">PROMOTIONS</span>
                        {selectPage === 3 &&
                            <div className="active w-100 h-100 position-absolute"></div>
                        }
                    </div>
                </Link>
            </div>
            <div className="w-85 bg-white h-100 d-flex align-items-center space-select-page">
                <div className="w-70">
                    <span>{admin.page[selectPage]}</span>
                </div>
                <div className="w-30 d-flex justify-content-center box-admin-login">
                    <img alt="" src={admin.image}/>
                    <div className="d-flex flex-wrap justify-content-center box-name-admin">
                        <span className="w-100 text-center">{admin.name}</span>
                        <button className="w-50 bg-second color-white border-0">LOG OUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminNavBar;