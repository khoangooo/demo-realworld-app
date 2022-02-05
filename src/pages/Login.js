import { useState, useEffect } from "react";
import { LoginForm } from "../containers";
import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { loginAccount } from "../redux/login/thunk";

function Login() {
    const dispatch = useDispatch();
    const [userAccount, setUserAccout] = useState({})

    useEffect(() => {
        document.title = "Sign in - Conduit"
    }, [])

    const handleEnterUserAccount = (value = {}) => {
        setUserAccout({...userAccount, ...value})
    }

    const handleLoginAccount = (e) => {
        e.preventDefault();
        dispatch(loginAccount(userAccount));
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
                        <LoginForm onChange={handleEnterUserAccount} onClick={handleLoginAccount}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;
