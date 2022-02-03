import { Link } from "react-router-dom";

function ArticleBanner({
    title = "",
    username = "",
    dateString = "",
    favoritesCount = 0,
    imgUrl = "http://i.imgur.com/Qr71crq.jpg",
    alt = "",
    handleGoToUserPage = () => {}
}) {
    return (
        <div className="banner">
            <div className="container">
                <h1>{title}</h1>

                <div className="article-meta">
                    <Link to="">
                        <img src={imgUrl} alt={alt} />
                    </Link>
                    <div className="info">
                        <Link to="" className="author">
                            {username}
                        </Link>
                        <span className="date">{dateString}</span>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary" onClick={handleGoToUserPage}>
                        <i className="ion-plus-round"></i>
                        &nbsp; Follow &nbsp;{username} 
                        {/* <span className="counter">{`(${favoritesCount})`}</span> */}
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-sm btn-outline-primary">
                        <i className="ion-heart"></i>
                        &nbsp; Favorite Article <span className="counter">{`(${favoritesCount})`}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ArticleBanner;
