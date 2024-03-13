
import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="space-y-3 bg-white p-4 rounded-lg">
            <h1 className="text-lg font-semibold">{title}</h1>
            
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object

}


export default Bookmark;