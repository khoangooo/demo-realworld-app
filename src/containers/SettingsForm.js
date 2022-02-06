import { Button, Input, Textarea } from "../components";

function SettingsForm({
    bio = undefined,
    email = "",
    image = "",
    username = "",
    handleChangeSettings = () => {},
    handleSubmit = () => {},
}) {
    return (
        <form>
            <fieldset>
                <fieldset className="form-group">
                    <Input
                        value={image}
                        className="form-control"
                        type="text"
                        placeholder="URL of profile picture"
                        onChange={handleChangeSettings("image")}
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Input
                        value={username}
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Your Name"
                        onChange={handleChangeSettings("username")}
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Textarea
                        value={bio}
                        className="form-control form-control-lg"
                        rows="8"
                        placeholder="Short bio about you"
                        onChange={handleChangeSettings("bio")}
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Input
                        value={email}
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Email"
                        onChange={handleChangeSettings("email")}
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Input
                        className="form-control form-control-lg"
                        type="password"
                        placeholder="Password"
                        onChange={handleChangeSettings("password")}
                    />
                </fieldset>
                <Button className="btn btn-lg btn-primary pull-xs-right" onClick={handleSubmit}>
                    Update Settings
                </Button>
            </fieldset>
        </form>
    );
}

export default SettingsForm;
