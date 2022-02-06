import { useState, useEffect } from "react";
import { UserInfo, Feed } from "../containers";
import { Preview } from "../components";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function Profile() {
    const user = useSelector((store) => store.login);
    const [loadingProfile, setLoadingProfile] = useState(true);
    const [profile, setProfile] = useState({});

    const { username } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (username) {
            getUserProfile(username);
        }
    }, [username]);

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
                            <Feed wrapperClassName="articles-toggle" />

                            {/* <Preview /> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Profile;
