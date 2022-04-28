import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleAuth } from "../store/userSlice";
const Login = () => {
    const userStatus = useSelector((state) => state.user.user.isLogged)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const authUsername = useSelector((state) => state.user.user.username)
    const authPassword = useSelector((state) => state.user.user.password)
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (event)=>{

        event.preventDefault()  
        if(username === authUsername && parseInt(password) == authPassword){
            dispatch(toggleAuth())
            navigate('/profile')
        }else{
            setError("Eamil or password is incorrect, try again...")

        }
    }
    const clearError = ()=>{
        setError("")
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <h1>LOGIN FORM</h1>
            <label >Username</label>
            <input type="text" onFocus={clearError} value={username} onChange={(e)=> setUsername(e.target.value)} />
            <label >Password</label>
            <input type="password"  onFocus={clearError} value={password} onChange={(e)=> setPassword(e.target.value)} />
            {error && <span style={{color:'tomato', fontWeight:'bold'}}>{error}</span>}
            <button>Login</button>
        </form>
     );
}
 
export default Login;
