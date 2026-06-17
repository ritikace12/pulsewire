import { useState ,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { io } from "socket.io-client"

export  function Dashboard() {
    const [news,setNews] = useState([])
    const [error,setError] = useState("")
    const [message,setMessage] = useState("")

    const navigate = useNavigate()

    useEffect(()=>{
        getNews()
        const socket = io("http://localhost:5173")
    socket.on("news-created", (article) => {
console.log("SOCKET EVENT RECEIVED")
    console.log(article)
            setNews((prevNews) => [
                article,
                ...prevNews
            ])

        })

        return () => {
            socket.off("news-created")
        }

    },[]
    )
    async function getNews() {
        try {
            const token = localStorage.getItem("token")
    const res = await axios.get("http://localhost:5173/news/",{
        headers:{
            Authorization :`Bearer ${token}`
        }
    })
    setNews(res.data.data)
        } catch (err) {
            setError(err.response?.data?.error)
        }
    }

     //getNews()
    return(
    <>
    {error && <p style={{color:"red"}}>{error}</p>}
    {news.map(element=>(
    <div className="news-card">

    <img
        className="news-image"
        src={`http://localhost:5173/${element.imageUrl}`}
        alt={element.title}
    />

    <div className="news-content">

        <h2>{element.title}</h2>

        <p>{element.summary}</p>

        <p>{element.content}</p>

    </div>

</div>
    ))}
    </>
    )
}
