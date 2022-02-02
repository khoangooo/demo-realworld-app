import { Link } from "react-router-dom";

function Tag({ tag, onClick }) {
    return (
        <Link to="" className="tag-pill tag-default" onClick={onClick}>
            {tag}
        </Link>
    );
}

export default Tag;
