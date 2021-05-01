import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import HomeLogo from "../../images/Zalada.svg"
import { Link } from "react-router-dom";


function Register() {
    return (

        <div className="d-flex justify-content-center mt-2-5-v">
            <div className="register_face d-flex flex-column align-items-center py-2-v">
                <div>
                    <Link to="/"><img alt="" className="home_logo" src={HomeLogo} /></Link>
                </div>
                <div className="mt-1-5-v d-flex w-65 flex-wrap mx-auto">
                    <div className="w-100 mx-auto">
                        <input className="input-login-and-reg w-100" type="text" placeholder="USERNAME" />
                    </div>
                    <div className="mt-1-5-v w-100 mx-auto">
                        <input className="input-login-and-reg w-100" type="text" placeholder="EMAIL" />
                    </div>
                    <div className="mt-1-5-v w-100 mx-auto">
                        <input className="input-login-and-reg w-100" type="text" placeholder="CONFIRM PASSWORD" />
                    </div>
                    <div className="mt-1-5-v w-100 mx-auto">
                        <input className="input-login-and-reg w-100" type="text" placeholder="PASSWORD" />
                    </div>
                    <div class="d-flex justify-content-center mt-1-5-v custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="defaultUnchecked"></input>
                        <label className="custom-control-label" for="defaultUnchecked">I have read and agree to <Link to="#">the term of service</Link></label>
                    </div>
                </div>
                <button type="button" class="mt-2-v register_btn w-65 fw-bold color-white py-0-5-v rounded" >REGISTER</button>
            </div>
        </div>
    )
}
export default Register;
