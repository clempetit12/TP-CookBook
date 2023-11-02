import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { postSetUserSignin, setAuthMode } from "./authSlice"

const AuthPage = () => {

    const authMode = useSelector(state => state.auth.authMode)
const dispatch = useDispatch()
const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("envoyer infos connexion");
        
          const  login = emailRef.current.value
         const   password = passwordRef.current.value

        
        console.log(login,password);
     dispatch(setAuthMode("connecté"))
     dispatch(postSetUserSignin(login,password))
     navigate("/")

        


    }

   
    return(
    
    <>
    <h1>AuthPage</h1>
    <h3>{authMode}</h3>
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
                <button>{authMode}</button>
            </form>
            <button
                onClick={() => dispatch(setAuthMode(authMode === "Se connecter" ? "S'inscrire" : "Se connecter"))}>
                {authMode === "Se connecter" ? "S'inscrire" : "Se connecter"}
            </button>
        </>
    
    )
}
export default AuthPage