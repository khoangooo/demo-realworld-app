import { useState, useEffect } from "react";
import { ArticleBanner } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import dayjs from "dayjs";

function Article() {
    const { article_slug } = useParams();
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        if (article_slug) {
            getArticle(article_slug);
            
        }
    }, [article_slug]);

    useEffect(() => {
        if (article_slug) {
            document.title = article_slug.split("-").join(" ");
        }
    })

    const getArticle = (slug) => {
        setLoading(true);
        api.getArticle(slug).then((res) => {
            setLoading(false);
            if (Object.keys(res).length) {
                setArticle(res.article);
            } else {
                setArticle({});
            }
        });
    };

    const handleGoToUserPage = () => {
        navigate("/register");
    }

    return (
        !loading && (
            <div className="article-page">
                <ArticleBanner
                    title={article.title}
                    username={article.author?.username || ""}
                    dateString={dayjs(article.updatedAt).format("MMMM DD,YYYY")}
                    favoritesCount={article.favoritesCount}
                    imgUrl={article.author?.image}
                    alt={article.author?.username}
                    handleGoToUserPage={handleGoToUserPage}
                />
            </div>
        )
    );
}

export default Article;
