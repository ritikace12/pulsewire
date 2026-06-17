import { useState,useEffect } from "react"
import {Link , useNavigate} from "react-router-dom"
import axios from "axios"
export function Login() {
   
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const [message,setMessage] = useState("")
    const navigate = useNavigate()
    const URL = "http://localhost:5173/auth/login"
    async function handleLogin() {
        if(!email || !password){
            setError("All fields are Required")
            return
        }
        try {
            setError("")
            setMessage("")
            const res = await axios.post(URL,{
                email,password
            })
            setMessage("Logged in successfully")
            localStorage.setItem("token",res.data.token)
            navigate('/')

        } catch (err) {
            setMessage("")
            setError(err.response?.data?.error)
        }
    }
    return(
    <>
    {error && <p style={{color:"red"}}>{error}</p>}
    <input
    type="email"
    placeholder="Type your email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}/>
    <input 
    type="password"
    placeholder="Type your password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}/>
    <button 
    onClick={handleLogin}>Login</button>
    <p>Don't have an account <Link to="/signup">Signup</Link></p>
    {message && <p style={{color:"green"}}>{message}</p>}
    </>
    )
}
