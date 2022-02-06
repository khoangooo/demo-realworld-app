import { useState, useEffect, Fragment } from "react";
import { UserInfo, Feed } from "../containers";
import { Preview } from "../components";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import dayjs from "dayjs";

function Profile() {
    const user = useSelector((store) => store.login);
    const [loadingProfile, setLoadingProfile] = useState(false);
    const [loadingArticles, setLoadingArticles] = useState(true);
    const [articles, setArticles] = useState([]);
    const [profile, setProfile] = useState({});
    const [activeTab, setActiveTab] = useState("1");

    const { username } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (username) {
            getUserProfile(username);
        }
    }, [username]);

    useEffect(() => {
        if (activeTab === "1") {
            getArticles("getYourArticles");
        } else {
            getArticles("getArticles");
        }
    }, [activeTab]);

    const getArticles = (apiType) => {
        setLoadingArticles(true);
        api[apiType]().then((res) => {
            setLoadingArticles(false);
            if (res.articles) {
                setArticles(res.articles);
            } else {
                setArticles([]);
            }
        });
    };

    const getUserProfile = (username) => {
        setLoadingProfile(true);
        api.getUserProfile(username)
            .then((res) => {
                setLoadingProfile(false);
                if (res.profile) {
                    setProfile(res.profile);
                }
            })
            .catch((err) => setLoadingProfile(false));
    };

    const handleGoToSettingsPage = () => navigate("../settings");

    const handleChangeActiveTab = (v) => () => setActiveTab(v);

    return (
        !loadingProfile && (
            <div className="profile-page">
                <UserInfo
                    bio={profile.bio}
                    following={profile.following}
                    image={profile.image}
                    username={profile.username}
                    currentLoggedInUser={user.userAccount.username}
                    handleGoToSettingsPage={handleGoToSettingsPage}
                />

                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <Feed
                                wrapperClassName="articles-toggle"
                                activeTab={activeTab}
                                handleChangeActiveTab={handleChangeActiveTab}
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
                    </div>
                </div>
            </div>
        )
    );
}

export default Profile;
