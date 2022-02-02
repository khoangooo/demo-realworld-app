import { Link } from "react-router-dom";

function Tabs() {
    return (
        <ul className="nav nav-pills outline-active">
            <li className="nav-item">
                <Link className="nav-link disabled" to="">
                    Your Feed
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="">
                    Global Feed
                </Link>
            </li>
        </ul>
    );
}

export default Tabs;
