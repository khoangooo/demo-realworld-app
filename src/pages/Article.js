import { useState, useEffect } from "react";
import { Banner, Content, PostCard, Comment } from "../components";
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
    const [comment, setComment] = useState({});
    const [confirmPostingComment, setConfirmPostingComment] = useState(false);
    const [following, setFollowing] = useState(false);

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
            if (res.article) {
                setArticle(res.article);
            } else {
                setArticle({});
            }
        });
    };

    const compareSmallToBig = (a, b) => (dayjs(a.updatedAt).diff(b.updatedAt, "day") > 0 ? -1 : 1);

    const getComments = (slug) => {
        setLoadingComments(true);
        api.getComments(slug).then((res) => {
            setLoadingComments(false);
            if (res.comments) {
                const newComments = res.comments.sort(compareSmallToBig);
                setComments(newComments);
            } else {
                setComments({});
            }
        });
    };

    const handleGoToUserPage = () => {
        if (user.isLoggedIn) {
            if (article?.author?.following) {
                api.unfollowUser(article?.author?.username).then((res) => {
                    setFollowing(res.profile.following);
                });
            } else {
                api.followUser(article?.author?.username).then((res) => {
                    setFollowing(res.profile.following);
                });
            }
        } else {
            navigate("/register");
        }
    };

    const handleRemoveArticle = () => {
        if (article_slug) {
            api.deleteArticle(article_slug).then(() => navigate("/"));
        }
    };

    const handleChangeComment = (e) => {
        setComment({ body: e.target.value });
    };
    const handlePostComment = () => {
        setConfirmPostingComment(true);
        api.createNewComment(article_slug, comment)
            .then(() => {
                setConfirmPostingComment(false);
                getComments(article_slug);
                setComment({});
            })
            .catch((err) => setConfirmPostingComment(false));
    };

    const handleRemoveComment = (article_slug, comment_id) => () => {
        setLoadingComments(true);
        setConfirmPostingComment(true);
        api.deleteComment(article_slug, comment_id)
            .then((res) => {
                setLoadingComments(false);
                setConfirmPostingComment(false);
                getComments(article_slug);
            })
            .catch((err) => setLoadingComments(false));
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
                        isCurrentUser={user.userAccount?.username === article?.author?.username}
                        following={following}
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
                            isCurrentUser={user.userAccount?.username === article?.author?.username}
                            following={following}
                        />
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-8 offset-md-2">
                            {user.isLoggedIn ? (
                                <Comment
                                    image={article.author?.image}
                                    body={comment.body}
                                    okText="Post Comment"
                                    onChange={handleChangeComment}
                                    handlePostComment={handlePostComment}
                                    disabled={confirmPostingComment}
                                />
                            ) : (
                                <p>
                                    <Link to="/login">Sign in</Link> or&nbsp;
                                    <Link to="/register">sign up</Link> to add comments on this article.
                                </p>
                            )}
                            {!loadingComments &&
                                comments.length > 0 &&
                                comments.map((comment, index) => (
                                    <PostCard
                                        key={index}
                                        body={comment.body}
                                        username={comment.author.username}
                                        dateString={dayjs(comment.updatedAt).format("MMMM DD,YYYY")}
                                        imgUrl={comment.author.image}
                                        isAuthor={user.userAccount.username === comment.author.username}
                                        handleRemoveComment={handleRemoveComment(article_slug, comment.id)}
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
