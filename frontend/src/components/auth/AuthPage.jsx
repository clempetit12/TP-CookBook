import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { postSetUserSignin, setAuthMode, setUser } from "./authSlice"

const AuthPage = () => {
    const authMode = useSelector((state) => state.auth.authMode);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const user = useSelector(state => state.auth.user)
 
  
    const submitHandler = async (e) => {
      e.preventDefault();
      dispatch(
        postSetUserSignin({
          login: emailRef.current.value,
          password: passwordRef.current.value,
        }))
   dispatch(setUser({
    login: emailRef.current.value,
    password: passwordRef.current.value,
  }))
        navigate("/")
  
    }

   

  
    return (
      <>
        <h1>AuthPage</h1>
        <h3>{authMode }</h3>
        <hr />
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <button> 
                {authMode}
            </button>
        </form>
      </>
    );
  };
  
export default AuthPage