import { Input, Button } from "../components";

function RegisterForm({
    username = "",
    email = "",
    password = "",
    handleSubmit = () => {},
    handleEnterNewAccountInfo = () => {},
    disabled = false,
}) {
    return (
        <form>
            <fieldset className="form-group">
                <Input
                    value={username}
                    type="text"
                    placeholder="Username"
                    onChange={handleEnterNewAccountInfo("username")}
                />
            </fieldset>
            <fieldset className="form-group">
                <Input
                    value={email}
                    type="email"
                    placeholder="Email"
                    onChange={handleEnterNewAccountInfo("email")}
                />
            </fieldset>
            <fieldset className="form-group">
                <Input
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={handleEnterNewAccountInfo("password")}
                />
            </fieldset>
            <Button disabled={disabled} onClick={handleSubmit}>
                Sign up
            </Button>
        </form>
    );
}

export default RegisterForm;
