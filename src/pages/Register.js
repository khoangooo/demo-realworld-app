import { useEffect } from "react";
import { RegisterForm } from "../containers";
import {Link} from "react-router-dom";

function Register() {

    useEffect(() => {
        document.title = "Sign up - Conduit"
    }, [])

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <Link to="/login">Have an account?</Link>
                        </p>

                        <ul className="error-messages">
                            <li>That email is already taken</li>
                        </ul>

                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
