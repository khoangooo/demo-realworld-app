import { useState, useEffect, Fragment } from "react";
import { Banner } from "../components";
import { ArticlePreview } from "../components";
import { Feed, Sidebar } from "../containers";
import api from "../api/routes";
import dayjs from "dayjs";

function Home() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        api.getArticles().then((res) => {
            setLoading(false);
            if (Object.keys(res).length) {
                setArticles(res.articles);
            } else {
                setArticles([]);
            }
        });
    }, []);
    return (
        <div className="home-page">
            <Banner />
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <Feed />
                        {loading ? (
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
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
