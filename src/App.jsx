
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readingtime, setReadingTime] = useState(0);

  const handleAddToBookmarks = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);

  }

  const handleReadingTime = (time, id) => {
     const newReadingTime = readingtime + time;
     setReadingTime(newReadingTime);

     const remaining = bookmarks.filter(bookmark => bookmark.id !== id);
     setBookmarks(remaining);
  }
 


  return (
    <>

      <Header></Header>

      <div className='container mx-auto px-20 flex justify-between my-10'>

        <div className='w-[62%] mx-auto shadow-lg p-4'>
          <Blogs 
          handleAddToBookmarks={handleAddToBookmarks}
          handleReadingTime={handleReadingTime}
          ></Blogs>
        </div>

        <div className='w-[35%] mx-auto '>
          <Bookmarks
           bookmarks={bookmarks}
           readingtime={readingtime}
           

          ></Bookmarks>
        </div>

      </div>


    </>
  )
}

export default App
