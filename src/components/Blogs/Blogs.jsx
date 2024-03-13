import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookmarks, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    }, [])
    


    return (
        <div>
            <h3 className="text-2xl font-bold">Blogs: {blogs.length}</h3>
            {
                blogs.map((blog, index) => <Blog
                 key={index} 
                 blog={blog}
                 handleAddToBookmarks={handleAddToBookmarks}
                 handleReadingTime={handleReadingTime}
                 ></Blog>)
            }

        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func,
    handleReadingTime: PropTypes.func

}

export default Blogs;