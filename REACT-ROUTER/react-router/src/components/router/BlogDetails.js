import {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import {blogs} from "./data"

const BlogDetails = () => {
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [author, setAuthor] = useState("")

    const { id } = useParams();
    console.log(typeof id);

     useEffect(()=>{
        const thisBlog = blogs.find((blog)=> blog.id === 
        parseInt(id))    
        setTitle(thisBlog.title);
        setAuthor(thisBlog.author);
        setDetails(thisBlog.details);
    },[id])  
    
    return (
        <div className="container --P">
            <h1 className="--text-center">{title}</h1>
            <hr/>
            <p>
                <b>Author: {author}</b>
            </p>
            <br/>
            <p>{details}</p>
            <div className="--my2">
                <Link to="/blogs">{`<<< Back to Blogs`}</Link>
            </div>
        </div>
    )
}

export default BlogDetails