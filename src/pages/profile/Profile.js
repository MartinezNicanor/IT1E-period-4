import './Profile.css';
import Avatar from './components/Avatar';
import FormProfile from './components/FormProfile';
import Header from '../../components/header/Header';

const Profile = () => {
    const nameForm = {
        title: "Change your name",
        inputs: ["First Name", "Last Name"],
        className: ["fname", "lname"]
    };

    const passwordForm = {
        title: "Change your password",
        inputs: ["New password", "Confirm new password"],
        className: ["password", "confirmPassword"]
    };

    return ( 
        <div className="profileContainer">
            <Header title = "Profile" />
            <div className="userInfo">
                <div className="info">
                    <p className="nameTitle">Random Name</p> {/* This is hardcoded for now */}
                    <p className="emailTitle">random-name@email.com</p>
                </div>
                <Avatar src = "" alt = "" />
            </div>
            <div className="forms">
                <FormProfile info = {nameForm} />
                <FormProfile info = {passwordForm} />
            </div>
        </div>
     );
}
 
export default Profile;
