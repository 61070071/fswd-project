import React from "react";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar";
import NamePageAdmin from "../../../components/NamePageAdmin/NamePageAdmin";

function AdminPromotionCreateGet() {
    return (
        <div className="d-flex flex-wrap">
            <div className="w-15">
                <AdminNavBar />
            </div>
            <div className="w-85 d-flex flex-wrap align-items-start bg-main">
                <NamePageAdmin />
                <div className="bg-white mx-auto w-90 d-flex align-items-start flex-wrap">
                <span>g</span>
                </div>
            </div>
        </div>
    );
}

export default AdminPromotionCreateGet;