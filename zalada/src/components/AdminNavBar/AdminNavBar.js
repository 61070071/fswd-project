import React from "react";
import "./AdminNavBar.css";
import logo from "../../images/admin-logo.svg"
import IconDashboard from "../../images/icon-dashboard.svg"
import IconOrders from "../../images/icon-cart.svg"
import IconProduct from "../../images/icon-package.svg"
import IconPromotions from "../../images/icon-pricetag.svg"
function AdminNavBar() {
    return (
        <div className="w-15  size-admin-nav d-flex flex-column">
            <div className="d-flex mx-auto h-20">
                <img alt="" src={logo} />
            </div>
            <div className="w-100 d-flex align-items-center py-1-v position-relative">
                <div className="w-30 d-flex justify-content-center align-items-center">
                    <img alt="" src={IconDashboard} />
                </div>
                <span className="color-white">DASHBOARD</span>
                <div className="active w-100 h-100 position-absolute"></div>
            </div>
            <div className="w-100 d-flex align-items-center py-1-v position-relative">
                <div className="w-30 d-flex justify-content-center align-items-center">
                    <img alt="" src={IconOrders} />
                </div>
                <span className="color-white">ORDERS</span>
            </div>
            <div className="w-100 d-flex align-items-center py-1-v position-relative">
                <div className="w-30 d-flex justify-content-center align-items-center">
                    <img alt="" src={IconProduct} />
                </div>
                <span className="color-white">PRODUCT</span>
            </div>
            <div className="w-100 d-flex align-items-center py-1-v position-relative">
                <div className="w-30 d-flex justify-content-center align-items-center">
                    <img alt="" src={IconPromotions} />
                </div>
                <span className="color-white">PROMOTIONS</span>
            </div>
        </div>
    );
}
export default AdminNavBar;