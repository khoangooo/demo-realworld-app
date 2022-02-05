import { Input, Button } from "../components";

function LoginForm({ onClick = () => {}, onChange = () => {} }) {

    const handleChange = (type) => (e) => {
        const value = { [type]: e.target.value };
        onChange(value);
    };

    return (
        <form>
            <fieldset className="form-group">
                <Input type="email" placeholder="Email" onChange={handleChange("email")} />
            </fieldset>
            <fieldset className="form-group">
                <Input type="password" placeholder="Password" onChange={handleChange("password")} />
            </fieldset>
            <Button title="Sign in" onClick={onClick} />
        </form>
    );
}

export default LoginForm;
