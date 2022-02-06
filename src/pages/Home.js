import { useState, useEffect, Fragment } from "react";
import { Preview, Tag } from "../components";
import { Feed } from "../containers";
import { useSelector } from "react-redux";
import api from "../api";
import dayjs from "dayjs";

function Home() {
    const [tags, setTags] = useState([]);
    const [articles, setArticles] = useState([]);
    const [loadingArticles, setLoadingArticles] = useState(false);
    const [loadingTags, setLoadingTags] = useState(false);
    const [activeTab, setActiveTab] = useState("1");
    const [currentTag, setCurrentTag] = useState("");

    const user = useSelector((store) => store.login);

    useEffect(() => {
        getTags();
    }, []);

    useEffect(() => {
        document.title = "Home - Conduit";
    });

    useEffect(() => {
        if (currentTag) {
            getArticles("2", currentTag);
        } else {
            getArticles(activeTab);
        }
    }, [activeTab, currentTag]);

    const getArticles = (activeTab, tag) => {
        let apiType = activeTab === "1" ? "getYourArticles" : "getArticles";
        setLoadingArticles(true);
        api[apiType]({tag}).then((res) => {
            setLoadingArticles(false);
            if (res.articles) {
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

    const handleGettingArticlesByTagName = (tag) => () => {
        setCurrentTag(tag)
        setActiveTab("3")
    };

    const handleChangeActiveTab = (v) => () => {
        setActiveTab(v)
        setCurrentTag("")
    };

    return (
        <div className="home-page">
            {!user.isLoggedIn && (
                <div className="banner">
                    <div className="container">
                        <h1 className="logo-font">conduit</h1>
                        <p>A place to share your knowledge.</p>
                    </div>
                </div>
            )}
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <Feed
                            wrapperClassName="feed-toggle"
                            activeTab={activeTab}
                            handleChangeActiveTab={handleChangeActiveTab}
                            currentTag={currentTag}
                        />
                        {loadingArticles ? (
                            <div className="m-t-2">Loading articles...</div>
                        ) : articles.length ? (
                            articles.map((item, index) => (
                                <Fragment key={index}>
                                    <Preview
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
                        ) : (
                            <div className="m-t-2">No articles are here... yet.</div>
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
                                            <Tag
                                                key={tag}
                                                tag={tag}
                                                onClick={handleGettingArticlesByTagName(tag)}
                                            />
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
