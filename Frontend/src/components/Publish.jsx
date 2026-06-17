import { useState } from "react";
import axios from "axios";
import "./Style.css";
import { Dashboard } from "./Dashboard";
export function Publish() {

    const [title,setTitle] = useState("");
    const [summary,setSummary] = useState("");
    const [imageUrl,setImageUrl] = useState("");

    const [error,setError] = useState("");
    const [message,setMessage] = useState("");

    async function handlePublish(){

        try{

            const token =
                localStorage.getItem("token");

            await axios.post(
                "http://localhost:5173/news/publish",
                {
                    title,
                    summary,
                    imageUrl
                },
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            );

            setMessage("Article Published");
            setError("");

        }catch(err){

            setError(
                err.response?.data?.error
            );

        }
    }

    return(
        <>

            <div className="publish-container">

                <h1>Publish News</h1>

                {error &&
                    <p style={{color:"red"}}>
                        {error}
                    </p>
                }

                {message &&
                    <p style={{color:"green"}}>
                        {message}
                    </p>
                }

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e)=>
                        setTitle(e.target.value)
                    }
                />

                <textarea
                    rows="5"
                    placeholder="Summary"
                    value={summary}
                    onChange={(e)=>
                        setSummary(e.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e)=>
                        setImageUrl(e.target.value)
                    }
                />

                <button
                    className="publish-btn"
                    onClick={handlePublish}
                >
                    Publish
                </button>
<Dashboard/>
            </div>
        </>
    );
}