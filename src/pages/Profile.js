import { UserInfo, Feed } from "../containers";
import {Preview} from "../components"

function Profile() {
    return (
        <div className="profile-page">
            <UserInfo bio="" following={false} image="" username="" followedUsername="" />

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <Feed wrapperClassName="articles-toggle" />

                        {/* <Preview /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
