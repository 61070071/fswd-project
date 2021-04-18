import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import HomeLogo from "../../images/Zalada.svg"
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";


function Register() {
    return (

        <div className="register d-flex justify-content-center mt-5">
            <div className="register_face d-flex flex-column align-items-center">
                <div className="mt-5">
                    <Link to="/"><img className="home_logo" src={HomeLogo} /></Link>
                </div>
                <div className="mt-5 ">
                    <div className="d-flex justify-content-center">
                        <input className=" " type="text" placeholder="USERNAME" />
                    </div>
                    <div className="mt-5 d-flex justify-content-center">
                        <input className="" type="text" placeholder="PASSWORD" />
                    </div>
                    <div className="mt-5 d-flex justify-content-center">
                        <input className="" type="text" placeholder="CONFIRM PASSWORD" />
                    </div>
                    <div className="mt-5 d-flex justify-content-center">
                        <input className="" type="text" placeholder="PASSWORD" />
                    </div>
                    <div class="d-flex justify-content-center mt-5 custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultUnchecked"></input>
                         <label class="custom-control-label" for="defaultUnchecked">I have read and agree to <a className="">the term of service</a></label>
                     </div>
                </div>
                <button type="button" class="btn btn-primary btn-lg mt-4 register_btn" >LOGIN</button>
            </div>
        </div>
    )
}
export default Register;
