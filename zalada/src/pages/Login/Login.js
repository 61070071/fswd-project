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
        <div className="login d-flex justify-content-center mt-5">
            <div className="login_face d-flex flex-column align-items-center p-4">
                <div className="mt-5">
                    <Link to="/"><img alt="" className="home_logo" src={HomeLogo} /></Link>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="mt-5">
                        <div>
                            <input type="text" placeholder="USERNAME" value={username} onChange={handleUsernameChange} required />
                        </div>
                        <div className="mt-5">
                            <input type="password" placeholder="PASSWORD" value={password} onChange={handlePasswordChange} required />
                        </div>
                        <Link to="#" className="d-flex justify-content-end likable forgot">FORGOT PASSWORD ?</Link>
                    </div>
                    <div className="d-flex justify-content-center"><button type="submit" class=" btn btn-primary btn-lg mt-5 login_btn" >LOGIN</button></div>
                    
                </form>
                <span className="mt-1">or you haven't an account yet ? <Link to="/Register" className="likable">Register</Link></span>
            </div>
        </div>
    )
}
export default Login;
