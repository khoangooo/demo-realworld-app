import { useState, useEffect } from "react";
import { LoginForm } from "../containers";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAccount } from "../redux/login/thunk";

function Login() {
    const dispatch = useDispatch();
    const [userAccount, setUserAccout] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Sign in - Conduit";
    }, []);

    const handleLoginAccount = () => {
        dispatch(loginAccount(userAccount));
        navigate("/")
    };

    const handleEnterUserAccount = (type) => (e) => {
        const value = { [type]: e.target.value };
        setUserAccout({ ...userAccount, ...value });
    };

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
                        <LoginForm
                            email={userAccount.email}
                            password={userAccount.password}
                            handleEnterUserAccount={handleEnterUserAccount}
                            onClick={handleLoginAccount}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
