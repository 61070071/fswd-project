import React, { useState } from "react";
import "./AdminNavBar.css";
import logo from "../../images/admin-logo.svg"
import IconDashboard from "../../images/icon-dashboard.svg"
import IconOrders from "../../images/icon-cart.svg"
import IconProduct from "../../images/icon-package.svg"
import IconPromotions from "../../images/icon-pricetag.svg"
import { Link } from "react-router-dom";
function AdminNavBar({ page }) {
    const [selectPage, setSelectPage] = useState(page);
    function handlePage(e) {
        setSelectPage(e);
    }
    return (
        <div className="w-100 m-0">
            <div className="w-100 size-admin-nav d-flex flex-column">
                <div className="d-flex mx-auto h-20">
                    {/* <img alt="" src={logo} /> */}
                </div>
                <Link to="/admin">
                    <div className="w-100 d-flex align-items-center py-1-v position-relative">
                        <div className="w-30 d-flex justify-content-center align-items-center">
                            <img alt="" src={IconDashboard} />
                        </div>
                        <span className="color-white">DASHBOARD</span>
                        {selectPage === 0 &&
                            <div className="active w-100 h-100 position-absolute"></div>
                        }
                    </div>
                </Link>
                <Link to="/admin/orders">
                    <div className="w-100 d-flex align-items-center py-1-v position-relative">
                        <div className="w-30 d-flex justify-content-center align-items-center">
                            <img alt="" src={IconOrders} />
                        </div>
                        <span className="color-white">ORDERS</span>
                        {selectPage === 1 &&
                            <div className="active w-100 h-100 position-absolute"></div>
                        }
                    </div>
                </Link>
                <Link to="/admin/products">
                    <div className="w-100 d-flex align-items-center py-1-v position-relative">
                        <div className="w-30 d-flex justify-content-center align-items-center">
                            <img alt="" src={IconProduct} />
                        </div>
                        <span className="color-white">PRODUCT</span>
                        {selectPage === 2 &&
                            <div className="active w-100 h-100 position-absolute"></div>
                        }
                    </div>
                </Link>
                <Link to="/admin/promotions">
                    <div className="w-100 d-flex align-items-center py-1-v position-relative">
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

        </div>
    );
}
export default AdminNavBar;