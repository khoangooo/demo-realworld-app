import { Link } from "react-router-dom";
import Button from "../Button";
import {ARTICLE} from "../../constants/endpoints";

function ArticlePreview({
    imgUrl = "http://i.imgur.com/Qr71crq.jpg",
    alt = "",
    username = "",
    dateString = "",
    favoritesCount = "",
    title = "",
    description = "",
    tagList = [],
    slug=""
}) {
    return (
        <div className="article-preview">
            <div className="article-meta">
                <Link to={`../${username}`}>
                    <img src={imgUrl} alt={alt} />
                </Link>
                <div className="info">
                    <Link to={`../${username}`} className="author">
                        {username}
                    </Link>
                    <span className="date">{dateString}</span>
                </div>
                <Button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> {favoritesCount}
                </Button>
            </div>
            <Link to={`/${ARTICLE}/${slug}`} className="preview-link">
                <h1>{title}</h1>
                <p>{description}</p>
                <span>Read more...</span>
                {tagList.length > 0 && (
                    <ul className="tag-list">
                        {tagList.map((item) => (
                            <li key={item} className="tag-default tag-pill tag-outline">
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </Link>
        </div>
    );
}

export default ArticlePreview;
