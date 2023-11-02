import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { postSetUserSignin, setAuthMode } from "./authSlice"

const AuthPage = () => {

    const authMode = useSelector(state => state.auth.authMode)
const dispatch = useDispatch()
const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const [showAlert, setShowAlert] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("envoyer infos connexion");
    
        try {
            await dispatch(postSetUserSignin({ login: emailRef.current.value, password: passwordRef.current.value }));
            // Authentification réussie, redirigez ou effectuez d'autres actions nécessaires.
            dispatch(setAuthMode("Se déconnecter"));
            navigate("/");
            setIsAuthenticated(true);
          
        } catch (error) {
            if (error.message === "Authentification échouée") {
                setShowAlert(true)
                setIsAuthenticated(false);
            } else {
                // Gérer d'autres erreurs, si nécessaire
                alert("Une erreur s'est produite lors de l'authentification.");
            }
        }
 
    }
    return(
    
    <>
    <h1>AuthPage</h1>
    <h3>{isAuthenticated ? "Se déconnecter" : "Se connecter"}</h3>
            <hr />
            {showAlert && (
                <div className="alert alert-danger">
                    Non autorisé : Vérifiez votre nom d'utilisateur et votre mot de passe.
                </div>
            )}
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" ref={emailRef} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" ref={passwordRef} />
                </div>
                <button> {isAuthenticated ? "Se déconnecter" : "Se connecter"}</button>
            </form>
        </>
    
    )
}
export default AuthPage