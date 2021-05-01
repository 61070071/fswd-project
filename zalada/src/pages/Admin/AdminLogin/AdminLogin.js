import React from "react";
import "./AdminLogin.css"
import logo from "../../../images/admin-logo.svg";
import bg from "../../../images/bg-admin-login.svg";
function AdminLogin() {

    return (
        <div className="d-flex flex-wrap w-100">
            <div className="w-20 d-flex justify-content-start align-items-center flex-column bg-admin-login flex-wrap">
                <img alt="" src={logo} className="w-80 mx-auto h-25"/>
                <div className="w-80 mx-auto d-flex h-5 flex-wrap mb-2-v">
                    <span className="color-white fs-0-7-v ml-0-5-v">USERNAME</span>
                    <input type="text" className="w-100 input-admin-login"/>
                </div>
                <div className="w-80 mx-auto d-flex h-5 flex-wrap mb-2-v">
                    <span className="color-white fs-0-7-v ml-0-5-v">PASSWORD</span>
                    <input type="password" className="w-100 input-admin-login"/>
                </div>
                <div className="w-50 d-flex justify-content-center bg-btn-admin-login">
                    <span className="fs-0-8-v">LOG IN</span>
                </div>
            </div>
            <div className="w-80 d-flex justify-content-center align-items-center">
                <img alt="" src={bg} />
            </div>

        </div>
    );
}

export default AdminLogin;