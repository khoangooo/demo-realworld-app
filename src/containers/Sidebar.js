import { Link } from "react-router-dom";

const arrTagName = [
  "programming",
  "javascript",
  "emberjs",
  "angularjs",
  "react",
  "mean",
  "node",
  "rails",
];

function Sidebar() {
  return (
    <div className="sidebar">
      <p>Popular Tags</p>

      <div className="tag-list">
        {arrTagName.map((item) => (
          <Link to="" className="tag-pill tag-default" key={item}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
