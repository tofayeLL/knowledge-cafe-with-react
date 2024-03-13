import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmarks, handleReadingTime }) => {
    const { id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='space-y-3 py-6'>
            <div >
                <img className='w-full object-cover rounded-lg' src={cover} alt="" />
            </div>

            <div className='flex justify-between'>

                <div className='flex items-center gap-5 flex-1'>
                    <img className='w-[10%] rounded-full' src={author_img} alt="" />
                    <div>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className='flex justify-between items-center gap-3'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} className='text-green-300'><FaBookmark></FaBookmark></button>
                </div>

            </div>

            <h3 className="text-xl font-semibold">{title}</h3>

            <div>
                {
                    hashtags.map((hash, index) => <span key={index} className='mr-2'>#{hash}</span>)
                }
            </div>

            <button onClick={() => handleReadingTime(reading_time, id)} className='text-blue-400 underline '>Mark As Read</button>


        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blog;