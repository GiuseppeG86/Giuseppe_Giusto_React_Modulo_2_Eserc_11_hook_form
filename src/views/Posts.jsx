import { useState } from "react";
import useFetch from "../hooks/useFetch";
function Posts () {

    const [url, setUrl] = useState();
    const posts = useFetch(url);

    return (
        <>
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Posts & users</h1>
        </div>
        <div className="mx-12">
            <button className="btn m-3 m-3 border-solid border-black" onClick={()=> setUrl('https://jsonplaceholder.typicode.com/posts')}>Posts</button>
            <button className="btn m-3 m-3 border-solid border-black" onClick={()=> setUrl('https://jsonplaceholder.typicode.com/users')}>Users</button>
            <ul>
                {posts && posts.map((el)=>{
                    return(
                        <li key={el.id}>{el.title || el.name}</li>
                    )
                })}
            </ul>
        </div>


        </>
    )
}

export default Posts