import React from 'react';
import './login.css'
import { useRef, useContext } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import {CircularProgress} from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const email = useRef();
    const navigate=useNavigate();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
        
    }

    const handleRegisterClick=()=>{
        navigate('/register');
    }
    const handleForget=()=>{
        
    }
    
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Login  </h3>
                    <span className="loginDesc">
                        connect with your favourite competetive coders
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder='Email' type='email' required className='loginInput' ref={email} />
                        <input placeholder='Password' type='password' required minLength="6" className="loginInput" ref={password} />
                        <button className='loginButton' disabled={isFetching}> {isFetching ? <CircularProgress 
                            color="primary" size="25px" /> : "Log in"} </button>
                        <span className="loginForgot" onClick={()=>handleForget}> Forgot login details</span>
                    </form>
                        <button className="loginRegisterButton" onClick={handleRegisterClick}>
                            {isFetching ? <CircularProgress color="primary" size="25px" /> : "Create account"}
                        </button>
                </div>
            </div>
        </div>
    )
}
