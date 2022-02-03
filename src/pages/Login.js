import { useEffect } from "react";
import { LoginForm } from "../containers";
import { Link } from "react-router-dom";

function Login() {

    useEffect(() => {
        document.title = "Sign in - Conduit"
    })

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign in</h1>
                        <p className="text-xs-center">
                            <Link to="/register">Need an account?</Link>
                        </p>

                        <ul className="error-messages">
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
