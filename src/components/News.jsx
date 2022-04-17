import { useEffect, useState } from "react";

const News = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=> res.json())
        .then(res=> res.slice(0,10))
        .then(res=> setPosts(res))
        
    },[])

    return ( 
        <div className="news">
            <h1>News</h1>
            {!posts.length &&(<h1>Loading . . .</h1>)}
            {posts && ( posts.map((post=>(
            <div className="content" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
                )))  
            )}
        </div>
     );
}
 
export default News;