function UserInfo({
    bio = "",
    following = false,
    image = "",
    username = "",
    currentLoggedInUser = "",
    handleGoToSettingsPage = () => {},
}) {
    return (
        <div className="user-info">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <img src={image} className="user-img" alt="" />
                        <h4>{username}</h4>
                        <p>{bio}</p>
                        <button
                            className="btn btn-sm btn-outline-secondary action-btn"
                            onClick={handleGoToSettingsPage}
                        >
                            {username !== currentLoggedInUser ? (
                                <>
                                    <i className="ion-plus-round"></i>
                                    &nbsp;{`${following ? "Unfollow" : "Follow"} ${username}`}
                                </>
                            ) : (
                                <>
                                    <i className="ion-gear-a"></i> Edit Profile Settings
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
