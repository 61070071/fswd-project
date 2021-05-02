import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import HomeLogo from "../../images/Zalada.svg"
import { Link } from "react-router-dom";
import { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { useMutation } from '@apollo/client'
import { CREATE_USER_MUTATION } from '../../graphql/createUserMutation'




function Register() {
    const history = useHistory()
    const [newUser, setNewUser] = useState({

    })
    const [createUser] = useMutation(CREATE_USER_MUTATION)
    const handleInputChange = useCallback(
        (e) => {
            const { name, value } = e.target
            setNewUser((prev) => ({ ...prev, [name]: value }))
        },
        [],
    )
    const handleRegister = useCallback(
        async (e) => {
            e.preventDefault()
            try {
                await createUser({ variables: { record: newUser } })
                history.push('/')
                alert('Register success')
            } catch (err) {
                console.log(err)
                alert('Register failed')
                console.log(newUser);
            }
        },
        [createUser, history, newUser],
    )
    return (

        <div className="d-flex justify-content-center mt-2-5-v">
            <div className="register_face d-flex flex-column align-items-center py-2-v">
                <div>
                    <Link to="/"><img alt="" className="home_logo" src={HomeLogo} /></Link>
                </div>
                <form onSubmit={handleRegister}>
                    <div className="mt-1-5-v d-flex w-65 flex-wrap mx-auto">
                        <div className="w-100 mx-auto">
                            <input onChange={handleInputChange} value={newUser.username} name="username" className="input-login-and-reg w-100" type="text" placeholder="USERNAME" />
                        </div>
                        <div className="mt-1-5-v w-100 mx-auto">
                            <input onChange={handleInputChange} value={newUser.email} name="email" className="input-login-and-reg w-100" type="text" placeholder="EMAIL" />
                        </div>
                        <div className="mt-1-5-v w-100 mx-auto">
                            <input onChange={handleInputChange} value={newUser.password} name="password" className="input-login-and-reg w-100" type="text" placeholder="PASSWORD" />
                        </div>
                        <div className="mt-1-5-v w-100 mx-auto">
                            <input onChange={handleInputChange} value={newUser.password} name="password" className="input-login-and-reg w-100" type="text" placeholder="CONFIRM PASSWORD" />
                        </div>
                        <div class="d-flex flex-column align-items-center item- mt-1-5-v custom-control custom-checkbox">
                            <div className="d-flex flex-row">
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked"></input>
                                <label className="custom-control-label" for="defaultUnchecked">I have read and agree to <Link to="#">the term of service</Link></label>
                            </div>
                            <button type="submit" class="mt-2-v d-flex justify-content-center register_btn w-65 fw-bold color-white py-0-5-v rounded" >REGISTER</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default Register;
