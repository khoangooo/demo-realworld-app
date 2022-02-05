import { Input, Button } from "../components";

function LoginForm() {
    return (
        <form>
            <fieldset className="form-group">
                <Input type="text" placeholder="Email" />
            </fieldset>
            <fieldset className="form-group">
                <Input type="password" placeholder="Password" />
            </fieldset>
            <Button>Sign up</Button>
        </form>
    );
}

export default LoginForm;
