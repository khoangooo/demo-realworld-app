import { Link } from "react-router-dom";

function PostCard({ body = "", username = "", dateString = "", imgUrl = "" }) {
    return (
        <div className="card">
            <div className="card-block">
                <p className="card-text">{body}</p>
            </div>
            <div className="card-footer">
                <Link to="" className="comment-author">
                    <img src={imgUrl} className="comment-author-img" alt={username} />
                </Link>
                &nbsp;
                <Link to="" className="comment-author">
                    {username}
                </Link>
                <span className="date-posted">{dateString}</span>
            </div>
        </div>
    );
}

export default PostCard;
