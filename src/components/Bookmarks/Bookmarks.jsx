import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'


const Bookmarks = ({bookmarks, readingtime}) => {
    
    return (
        
                
            

        <div >
          <div className="text-2xl text-blue-500 font-bold mb-4 text-center p-4 bg-blue-200">
          <h3>Spend Time On Read: {readingtime}</h3>
          </div>
            
            <div className="p-4 text-center bg-slate-300">
            <h3 className="text-2xl font-bold mb-4">Bookmarks: {bookmarks.length}</h3>
            <div className="space-y-3 text-start ">
            {
                bookmarks.map((bookmark, index) => <Bookmark 
                key={index}
                bookmark={bookmark}
                ></Bookmark>)
            }
            </div>
            </div>
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingtime: PropTypes.number

}

export default Bookmarks;