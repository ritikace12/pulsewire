import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
export function Signup() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const [message,setMessage] = useState("")
    const URL = "http://localhost:5173/auth/signup"
    async function handleSignup() {
        if(!name || !email || !password){
            setError("All Fields are Required")
            return
        }
        if(password.length < 6){
            setError("Password should be greater than 5 Characters")
            return
        }
        try {
            setError("")
            setMessage("")
            const res = await axios.post(URL,{
                name,email,password
            })
            setMessage("Signed Up Successfully")
        } catch (err) {
            setError(err.response?.data?.error || "Something went wrong")
        }

    }
    return(
    <>
    {error && <p style={{color:"red"}}>{error}</p>}
    <input
    type="text"
    placeholder="Type your name"
    value={name}
    onChange={(e)=>setName(e.target.value)}/>
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
    onClick={handleSignup}>Signup</button>
    <p>Already have an account <Link to="/login">Login</Link> </p>
    {message && <p style={{color:"green"}}>{message}</p>}
    </>
    )
}
