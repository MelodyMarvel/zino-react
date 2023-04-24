import React from "react";
import {blogs} from "./data"
import {Link} from "react-router-dom"

const Blogs = () =>{
    return (
        <div className="container">
            <div className="--center-all">
            <h1>Blog</h1>
            <p>
                Welcome to the <b>Blog</b> page 
            </p>
            </div>
            <article>
                {blogs.map((blog) => {
                    const {id, title, author} = blog
                    return (
                        <div className="--card --m --p">
                            <h4>{title}</h4>
                            <p>By {author}</p>
                            <Link to={`/blog/${id}`}>Read More</Link>
                        </div>
                    )
                })}
            </article>
        </div>
    )
}
export default Blogs;