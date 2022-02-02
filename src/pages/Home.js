import { useState, useEffect, Fragment } from "react";
import { Banner } from "../components";
import { ArticlePreview } from "../components";
import { Feed, Tag } from "../containers";
import api from "../api/routes";
import dayjs from "dayjs";

function Home() {
    const [tags, setTags] = useState([]);
    const [articles, setArticles] = useState([]);
    const [loadingArticles, setLoadingArticles] = useState(false);
    const [loadingTags, setLoadingTags] = useState(false);

    useEffect(() => {
        getArticles();
        getTags();
    }, []);

    const getArticles = (tag) => {
        setLoadingArticles(true);
        api.getArticles({ tag }).then((res) => {
            setLoadingArticles(false);
            if (Object.keys(res).length) {
                setArticles(res.articles);
            } else {
                setArticles([]);
            }
        });
    };

    const getTags = () => {
        setLoadingTags(true);
        api.getTags().then((res) => {
            setLoadingTags(false);
            if (Object.keys(res).length) {
                setTags(res.tags);
            } else {
                setTags([]);
            }
        });
    };

    const handleGettingArticlesByTagName = (tag) => {
        getArticles(tag)
    };

    return (
        <div className="home-page">
            <Banner />
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <Feed />
                        {loadingArticles ? (
                            <div className="m-t-2">Loading articles...</div>
                        ) : (
                            articles.map((item, index) => (
                                <Fragment key={index}>
                                    <ArticlePreview
                                        imgUrl={item.author.image}
                                        alt={item.author.username}
                                        username={item.author.username}
                                        dateString={dayjs(item.updatedAt).format("MMMM DD,YYYY")}
                                        favoritesCount={item.favoritesCount}
                                        title={item.title}
                                        description={item.description}
                                        tagList={item.tagList}
                                        slug={item.slug}
                                    />
                                </Fragment>
                            ))
                        )}
                    </div>
                    <div className="col-md-3">
                        <div className="sidebar">
                            <p>Popular Tags</p>

                            {loadingTags ? (
                                <div>Loading tags...</div>
                            ) : (
                                <div className="tag-list">
                                    {tags.length > 0 &&
                                        tags.map((tag) => (
                                            <Tag key={tag} tag={tag} onClick={() => handleGettingArticlesByTagName(tag)} />
                                        ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
