import LoginForm from "../containers/LoginForm";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div class="auth-page">
            <div class="container page">
                <div class="row">
                    <div class="col-md-6 offset-md-3 col-xs-12">
                        <h1 class="text-xs-center">Sign in</h1>
                        <p class="text-xs-center">
                            <Link to="/register">Need an account?</Link>
                        </p>

                        <ul class="error-messages">
                            <li>That email is already taken</li>
                        </ul>

                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
