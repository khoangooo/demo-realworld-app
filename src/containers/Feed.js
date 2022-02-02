import {Link} from "react-router-dom";

function Feed() {
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <Link className="nav-link" to="">
            Your Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="">
            Global Feed
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Feed;
