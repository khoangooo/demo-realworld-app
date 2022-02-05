import { useState, useEffect } from "react";
import { EditArticleForm } from "../containers";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function Edit() {
    const [loadingArticle, setLoadingArticle] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [article, setArticle] = useState({});

    const { article_slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (article_slug) {
            getArticleContent(article_slug);
        }
    }, [article_slug]);

    const getArticleContent = (slug) => {
        setLoadingArticle(true);
        api.getArticle(slug).then((res) => {
            setLoadingArticle(false);
            if (res.article) {
                setArticle(res.article);
            }
        });
    };

    const handleChangeContent = (type) => (e) => {
        let tagList = [];
        if (type === "tagList" && e.target.value) {
            tagList = e.target.value.trim().split(" ");
        }
        setArticle({ ...article, [type]: type === "tagList" ? tagList : e.target.value });
    };

    const handleCreateOrUpdateArticle = () => {
        setConfirmLoading(true);
        if (article_slug) {
            api.updateArticle(article_slug, article).then((res) => {
                setConfirmLoading(false);
                if (res.article) {
                    navigate(`/article/${article_slug}`);
                }
            });
        } else {
            api.createNewArticle(article).then((res) => {
                setConfirmLoading(false);
                if (res.article) {
                    navigate(`/article/${res.article.slug}`);
                }
            });
        }
    };

    return (
        !loadingArticle && (
            <div className="editor-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-10 offset-md-1 col-xs-12">
                            <EditArticleForm
                                title={article.title}
                                handleChangeContent={handleChangeContent}
                                description={article.description}
                                body={article.body}
                                tagListStr={article?.tagList?.join(" ")}
                                handleCreateOrUpdateArticle={handleCreateOrUpdateArticle}
                                disabled={confirmLoading}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Edit;
