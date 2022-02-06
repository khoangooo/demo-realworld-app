import Button from "../Button";
import { Link } from "react-router-dom";

function ArticleBanner({
    isLoggedIn = false,
    title = "",
    username = "",
    dateString = "",
    favoritesCount = 0,
    imgUrl = "http://i.imgur.com/Qr71crq.jpg",
    alt = "",
    linkToUpdateArticleContent = "",
    handleRemoveArticle = () => {},
    handleGoToUserPage = () => {},
    isCurrentUser = false,
    following = false,
}) {
    return (
        <div className="container">
            {title && <h1>{title}</h1>}

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
                {isLoggedIn && isCurrentUser ? (
                    <span>
                        <Link className="btn btn-outline-secondary btn-sm" to={linkToUpdateArticleContent}>
                            <i className="ion-edit"></i> Edit Article
                        </Link>
                        <Button className="btn btn-outline-danger btn-sm m-l-1" onClick={handleRemoveArticle}>
                            <i className="ion-trash-a"></i> Delete Article
                        </Button>
                    </span>
                ) : (
                    <span>
                        <Button className="btn btn-sm btn-outline-secondary" onClick={handleGoToUserPage}>
                            <i className="ion-plus-round"></i>
                            {`${following ? " Unfollow" : " Follow"} ${username}`}
                        </Button>
                        &nbsp;&nbsp;
                        <Button className="btn btn-sm btn-outline-primary m-l-1">
                            <i className="ion-heart"></i>
                            &nbsp;Favorite Article <span className="counter">{`(${favoritesCount})`}</span>
                        </Button>
                    </span>
                )}
            </div>
        </div>
    );
}

export default ArticleBanner;
