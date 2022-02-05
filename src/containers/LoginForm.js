import { Input, Button } from "../components";

function LoginForm({ onClick = () => {}, handleEnterUserAccount = () => {} }) {
    return (
        <form>
            <fieldset className="form-group">
                <Input type="email" placeholder="Email" onChange={handleEnterUserAccount("email")} />
            </fieldset>
            <fieldset className="form-group">
                <Input type="password" placeholder="Password" onChange={handleEnterUserAccount("password")} />
            </fieldset>
            <Button onClick={onClick}>Sign in</Button>
        </form>
    );
}

export default LoginForm;
