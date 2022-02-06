import { Link } from "react-router-dom";

function Feed({ wrapperClassName = "", activeTab = "1", handleChangeActiveTab = () => {}, currentTag = "" }) {
    return (
        <div className={wrapperClassName}>
            <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                    <Link
                        className={activeTab === "1" ? "nav-link active" : "nav-link"}
                        to=""
                        onClick={handleChangeActiveTab("1")}
                    >
                        Your Feed
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={activeTab === "2" ? "nav-link active" : "nav-link"}
                        to=""
                        onClick={handleChangeActiveTab("2")}
                    >
                        Global Feed
                    </Link>
                </li>
                {activeTab === "3" && (
                    <li className="nav-item">
                        <Link
                            className={activeTab === "3" ? "nav-link active" : "nav-link"}
                            to=""
                            onClick={handleChangeActiveTab("2")}
                        >
                            <i className="ion-pound"></i>
                            &nbsp;{currentTag}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Feed;
