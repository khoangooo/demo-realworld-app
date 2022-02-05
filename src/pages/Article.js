import { useState, useEffect } from "react";
import { Banner, Content, PostCard } from "../components";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../api";
import dayjs from "dayjs";

function Article() {
    const { article_slug } = useParams();
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([]);
    const [loadingArticle, setLoadingArticle] = useState(false);
    const [loadingComments, setLoadingComments] = useState(false);
    const navigate = useNavigate();
    const user = useSelector((store) => store.login);

    useEffect(() => {
        if (article_slug) {
            getArticle(article_slug);
            getComments(article_slug);
        }
    }, [article_slug]);

    useEffect(() => {
        if (article_slug) {
            document.title = article_slug.split("-").join(" ") + " - Conduit";
        }
    });

    const getArticle = (slug) => {
        setLoadingArticle(true);
        api.getArticle(slug).then((res) => {
            setLoadingArticle(false);
            if (Object.keys(res).length) {
                setArticle(res.article);
            } else {
                setArticle({});
            }
        });
    };

    const getComments = (slug) => {
        setLoadingComments(true);
        api.getComments(slug).then((res) => {
            setLoadingComments(false);
            if (Object.keys(res).length) {
                setComments(res.comments);
            } else {
                setComments({});
            }
        });
    };

    const handleGoToUserPage = () => {
        navigate("/register");
    };

    const handleRemoveArticle = () => {
        if (article_slug) {
            api.deleteArticle(article_slug).then(() => navigate("/"));
        }
    };

    return (
        !loadingArticle && (
            <div className="article-page">
                <div className="banner">
                    <Banner
                        title={article.title}
                        username={article.author?.username}
                        dateString={dayjs(article.updatedAt).format("MMMM DD,YYYY")}
                        favoritesCount={article.favoritesCount}
                        imgUrl={article.author?.image}
                        alt={article.author?.username}
                        handleGoToUserPage={handleGoToUserPage}
                        linkToUpdateArticleContent={`/editor/${article.slug}`}
                        isLoggedIn={user.isLoggedIn}
                        handleRemoveArticle={handleRemoveArticle}
                    />
                </div>
                <div className="container page">
                    <Content body={article.body} tagList={article.tagList} />
                    <hr />
                    <div className="article-actions">
                        <Banner
                            username={article.author?.username}
                            dateString={dayjs(article.updatedAt).format("MMMM DD,YYYY")}
                            favoritesCount={article.favoritesCount}
                            imgUrl={article.author?.image}
                            alt={article.author?.username}
                            handleGoToUserPage={handleGoToUserPage}
                            linkToUpdateArticleContent={`/article/${article.slug}`}
                            isLoggedIn={user.isLoggedIn}
                            handleRemoveArticle={handleRemoveArticle}
                        />
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-8 offset-md-2">
                            <p>
                                <Link to="/login">Sign in</Link> or&nbsp;
                                <Link to="/register">sign up</Link> to add comments on this article.
                            </p>
                            {!loadingComments &&
                                comments.length > 0 &&
                                comments.map((comment, index) => (
                                    <PostCard
                                        key={index}
                                        body={comment.body}
                                        username={comment.author.username}
                                        dateString={dayjs(comment.updatedAt).format("MMMM DD,YYYY")}
                                        imgUrl={comment.author.image}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Article;
