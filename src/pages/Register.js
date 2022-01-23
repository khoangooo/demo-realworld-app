import RegisterForm from "../containers/RegisterForm";
import {Link} from "react-router-dom";

function Register() {
    return (
        <div class="auth-page">
            <div class="container page">
                <div class="row">
                    <div class="col-md-6 offset-md-3 col-xs-12">
                        <h1 class="text-xs-center">Sign up</h1>
                        <p class="text-xs-center">
                            <Link to="/login">Have an account?</Link>
                        </p>

                        <ul class="error-messages">
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
