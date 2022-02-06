import { Link } from "react-router-dom";

function PostCard({ isAuthor = "", body = "", username = "", dateString = "", imgUrl = "", handleRemoveComment = {} }) {
    return (
        <div className="card">
            <div className="card-block">
                <p className="card-text">{body}</p>
            </div>
            <div className="card-footer">
                <Link to={`../${username}`} className="comment-author">
                    <img src={imgUrl} className="comment-author-img" alt={username} />
                </Link>
                &nbsp;
                <Link to={`../${username}`} className="comment-author">
                    {username}
                </Link>
                <span className="date-posted">{dateString}</span>
                {isAuthor && (
                    <span className="mod-options">
                        <i className="ion-trash-a" onClick={handleRemoveComment}></i>
                    </span>
                )}
            </div>
        </div>
    );
}

export default PostCard;
