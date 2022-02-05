import { useState, useEffect } from "react";
import { SettingsForm } from "../containers";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Settings() {
    const user = useSelector((store) => store.login);
    const [settings, setSettings] = useState(user.userAccount || {});

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Settings - Conduit";
    }, []);

    const handleChangeSettings = (type) => (e) => {
        const value = { [type]: e.target.value };
        setSettings({ ...settings, ...value });
    };

    const handleSubmit = () => {
        api.updateUserProfile(settings).then((v) => {
            navigate(`${settings.username}`);
        });
    };

    return (
        <div className="settings-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Your Settings</h1>
                        <SettingsForm
                            bio={settings.bio}
                            email={settings.email}
                            image={settings.image}
                            username={settings.username}
                            handleChangeSettings={handleChangeSettings}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
