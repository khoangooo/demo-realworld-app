import { Input, Button } from "../components";

function LoginForm({ email = "", password = "", onClick = () => {}, handleEnterUserAccount = () => {} }) {
    return (
        <form>
            <fieldset className="form-group">
                <Input value={email} type="email" placeholder="Email" onChange={handleEnterUserAccount("email")} />
            </fieldset>
            <fieldset className="form-group">
                <Input
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={handleEnterUserAccount("password")}
                />
            </fieldset>
            <Button onClick={onClick}>Sign in</Button>
        </form>
    );
}

export default LoginForm;
