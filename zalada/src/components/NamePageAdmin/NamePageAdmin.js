import React from "react";
function AdminNavBar({ page }) {
    const admin = {
        page: ["DASHBOARD", "ORDERS", "PRODUCT", "PROMOTIONS"],
        name: "THAPON CHANLAOR",
        image: "http://dummyimage.com/34x34/",
    }
    return (
        <div className="w-100 h-10 bg-white d-flex align-items-center space-select-page">
            <div className="w-70">
                <span>{admin.page[page]}</span>
            </div>
            <div className="w-30 d-flex justify-content-center box-admin-login">
                <img alt="" src={admin.image}/>
                <div className="d-flex flex-wrap justify-content-center box-name-admin">
                    <span className="w-100 text-center">{admin.name}</span>
                    <button className="w-50 bg-second color-white border-0">LOG OUT</button>
                </div>
            </div>
        </div>
    );
}
export default AdminNavBar;
