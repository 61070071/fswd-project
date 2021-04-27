import "./Admin.css";
import React from "react";
import AdminNavBar from "../../../components/AdminNavBar/AdminNavBar"
import NamePageAdmin from "../../../components/NamePageAdmin/NamePageAdmin"
function Admin() {
    return (
        <div className="d-flex flex-wrap">
            <div className="w-15">
                <AdminNavBar />
            </div>
            <div className="w-85 d-flex flex-wrap align-items-start">
                <NamePageAdmin />
                <span>test</span>
            </div>
            
        </div>
    );
}

export default Admin;