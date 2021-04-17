import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import HomeLogo from "../../images/Zalada.svg"
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";


function Login() {
    return (
        <div className="login d-flex justify-content-center mt-5">
            <div className="login_face d-flex flex-column align-items-center">
                <div className="mt-5">
                    <Link to="/"><img className="home_logo" src={HomeLogo} /></Link>
                </div>
                <div className="mt-5">
                    <div className="">
                        <input className="" type="text" placeholder="USERNAME" />
                    </div>
                    <div className="mt-5">
                        <input className="" type="text" placeholder="PASSWORD" />
                    </div>
                    <a className="d-flex justify-content-end likable forgot">FORGOT PASSWORD ?</a>
                </div>
                <button type="button" class="btn btn-primary btn-lg mt-5 login_btn" >LOGIN</button>
                <span className="mt-1">or you haven't an account yet ? <a className="likable">Register</a></span>
            </div>
        </div>
    )
}
export default Login;