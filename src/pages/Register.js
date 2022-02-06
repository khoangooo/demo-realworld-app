import { useEffect, useState } from "react";
import { RegisterForm } from "../containers";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAccount } from "../redux/login/thunk";
import api from "../api";

function Register() {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [newUser, setNewUser] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Sign up - Conduit";
    }, []);

    const createNewUser = (userData) => {
        setConfirmLoading(true);
        api.createNewUser(userData)
            .then((res) => {
                setConfirmLoading(false);
                if (res.user) {
                    const loginData = { email: newUser.email, password: newUser.password };
                    dispatch(loginAccount(loginData));
                    navigate("..");
                }
            })
            .catch((err) => setConfirmLoading(false));
    };

    const handleEnterNewAccountInfo = (type) => (e) => {
        const value = { [type]: e.target.value };
        setNewUser({ ...newUser, ...value });
    };

    const handleSubmit = () => {
        createNewUser(newUser)
    };

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <Link to="../login">Have an account?</Link>
                        </p>

                        <ul className="error-messages">
                            <li>That email is already taken</li>
                        </ul>

                        <RegisterForm
                            username={newUser.username}
                            email={newUser.email}
                            password={newUser.password}
                            handleEnterNewAccountInfo={handleEnterNewAccountInfo}
                            handleSubmit={handleSubmit}
                            disabled={confirmLoading}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
