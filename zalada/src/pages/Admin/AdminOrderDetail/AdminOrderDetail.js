import React from "react";
import "./AdminOrderDetail.css"
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar"
import NamePageAdmin from "../../../components/NamePageAdmin/NamePageAdmin"

import "bootstrap/dist/css/bootstrap.min.css";

function AdminOrderDetail() {
    return (
        <div className="d-flex flex-wrap">
            <div className="w-15">
                <AdminNavBar />
            </div>
            <div className="w-85 d-flex flex-column bg-gray">
                <NamePageAdmin />
                <div>

                </div>
            </div>
        </div>
    );
}

export default AdminOrderDetail;