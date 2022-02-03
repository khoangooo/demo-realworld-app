import React from "react";

function Content({ body = "", tagList = [] }) {
    return (
        <div className="row article-content">
            <div className="col-md-12">
                <p>{body}</p>
                <ul className="tag-list">
                    {tagList.length > 0 &&
                        tagList.map((tag, index) => (
                            <li key={index} className="tag-default tag-pill tag-outline">
                                {tag}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Content;
