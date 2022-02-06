import Button from "../Button";
import Textarea from "../Textarea";

function Comment({
    image="",
    placeholder = "Write a comment...",
    body = undefined,
    okText = "Post Comment",
    onChange = () => {},
    handlePostComment = () => {},
    disabled=false
}) {
    return (
        <form className="card comment-form">
            <div className="card-block">
                <Textarea
                    value={body}
                    className="form-control"
                    placeholder={placeholder}
                    rows={3}
                    onChange={onChange}
                />
            </div>
            <div className="card-footer">
                <img src={image} className="comment-author-img" alt="" />
                <Button disabled={disabled} className="btn btn-sm btn-primary" onClick={handlePostComment}>
                    {okText}
                </Button>
            </div>
        </form>
    );
}

export default Comment;
