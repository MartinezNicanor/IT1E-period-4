import './Profile.css';
import Avatar from './components/Avatar';
import Header from '../../components/header/Header';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../components/hooks/useAuthContext';

const Profile = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const { user } = useAuthContext()
    
    useEffect(() => {
        const fetchUserDetails = async () => {
          const response = await fetch('https://projectinnovate-it1e-backend-production.up.railway.app/profile', {
            method: 'GET',
            headers: {'Authorization': `Bearer ${user.token}`},
          })
          const json = await response.json()
    
          if (response.ok) {
            setFname(json.firstName)
            setLname(json.lastName)
            setEmail(json.email)
          }
        }
    
        if (user) {
          fetchUserDetails()
        }
      }, [user])

    return ( 
        <div className="profileContainer">
            <Header title = "Profile" />
            <div className="userInfo">
                <div className="info">
                    <p className="nameTitle">{ fname } { lname }</p>
                    <p className="emailTitle">{ email }</p>
                </div>
                <Avatar src = "" alt = "" />
            </div>
            <div className="forms">
                <form>
                <p className="inputTitle">Change your name</p>
                <div className="inputContainer">
                    <div className="inputs">
                        <label>First Name:</label>
                        <input type="text" name="fname" placeholder="First Name" />
                    </div>
                </div>

                <div className="inputContainer">
                    <div className="inputs">
                        <label>Last Name:</label>
                        <input type="text" name="lname" placeholder="Last Name" />
                    </div>
                </div>
                <button className="profileButton">Save</button>
            </form>

            <form>
                <p className="inputTitle">Change you password</p>
                <div className="inputContainer">
                    <div className="inputs">
                        <label>Current password:</label>
                        <input type="password" name="currentPassword" placeholder="Current password" />
                    </div>
                </div>

                <div className="inputContainer">
                    <div className="inputs">
                        <label>New password:</label>
                        <input type="password" name="newPassword" placeholder="New password" />
                    </div>
                </div>
                <button className="profileButton">Save</button>
            </form>
            </div>
        </div>
     );
}
 
export default Profile;
