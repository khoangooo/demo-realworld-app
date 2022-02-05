import { Input, Textarea, Button } from "../components";

function EditArticleForm({
    title = "",
    handleChangeContent = () => {},
    description = "",
    body = "",
    tagListStr = "",
    handleCreateOrUpdateArticle = () => {},
    disabled = false,
}) {
    return (
        <form>
            <fieldset>
                <fieldset className="form-group">
                    <Input
                        value={title}
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Article Title"
                        onChange={handleChangeContent("title")}
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Input
                        value={description}
                        type="text"
                        className="form-control"
                        placeholder="What's this article about?"
                        onChange={handleChangeContent("description")}
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Textarea
                        value={body}
                        className="form-control"
                        rows="8"
                        placeholder="Write your article (in markdown)"
                        onChange={handleChangeContent("body")}
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Input
                        value={tagListStr}
                        type="text"
                        className="form-control"
                        placeholder="Enter tags"
                        onChange={handleChangeContent("tagList")}
                    />
                    <div className="tag-list"></div>
                </fieldset>
                <Button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    onClick={handleCreateOrUpdateArticle}
                    disabled={disabled}
                >
                    Publish Article
                </Button>
            </fieldset>
        </form>
    );
}

export default EditArticleForm;
