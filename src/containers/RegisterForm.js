import { Input, Button } from "../components";

function LoginForm() {
    return (
        <form>
            <fieldset class="form-group">
                <Input type="text" placeholder="Email" />
            </fieldset>
            <fieldset class="form-group">
                <Input type="password" placeholder="Password" />
            </fieldset>
            <Button title="Sign up" />
        </form>
    );
}

export default LoginForm;
