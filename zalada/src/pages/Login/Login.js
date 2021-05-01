import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import HomeLogo from "../../images/Zalada.svg"
import React, { useCallback, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import { useSession } from '../../contexts/SessionContext'
function Login() {
    const history = useHistory()
    const { login } = useSession()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleUsernameChange = useCallback(
        (e) => {
            setUsername(e.target.value)
        },
        [],
    )
    const handlePasswordChange = useCallback(
        (e) => {
            setPassword(e.target.value)
        },
        [],
    )
    const handleLogin = useCallback(
        async (e) => {
            e.preventDefault()
            await login(username, password)
            // alert("success")
            history.push('/')
            window.location.reload(); 
        },
        [login, password, username, history],
    )
    // const redirectToRegister = useCallback(
    //     () => {
    //         history.push('/register')
    //     },
    //     [history],
    // )
    return (
        <div className="d-flex justify-content-center mt-2-5-v">
            <div className="login_face d-flex flex-column align-items-center py-2-v">
                <div>
                    <Link to="/"><img alt="" className="home_logo" src={HomeLogo} /></Link>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="mt-1-5-v d-flex w-80 flex-wrap mx-auto">
                        <div className="w-100">
                            <input type="text" placeholder="USERNAME" value={username} onChange={handleUsernameChange} required className="input-login-and-reg w-100" />
                        </div>
                        <div className="mt-1-5-v w-100">
                            <input type="password" placeholder="PASSWORD" value={password} onChange={handlePasswordChange} required className="input-login-and-reg w-100" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center w-100">
                        <button type="submit" class="mt-1-5-v login_btn w-80 fw-bold color-white py-0-5-v rounded" >LOGIN</button>
                    </div>
                    
                </form>
                <span className="mt-1-5-v">or you haven't an account yet ? <Link to="/Register" className="likable">Register</Link></span>
            </div>
        </div>
    )
}
export default Login;
