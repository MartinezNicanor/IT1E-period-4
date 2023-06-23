import './Profile.css';
import Avatar from './components/Avatar';
import Header from '../../components/header/Header';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../components/hooks/useAuthContext';
import { useLogout } from '../../components/hooks/useLogout';

const Profile = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')

    const { user } = useAuthContext()
    const { logout } = useLogout()
    const [passError, setPassError] = useState(null)
    const [nameError, setNameError] = useState(null)

    const [currentPassword, setCurrentPass] = useState('')
    const [newPassword, setNewPass] = useState('')

    // fetch user details
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

    // handle password change
    const handlePassChange = async(e) => {
        e.preventDefault()

        const response = await fetch('https://projectinnovate-it1e-backend-production.up.railway.app/profile', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json; charset=UTF-8', 'Authorization': `Bearer ${user.token}`},
            body: JSON.stringify({ currentPassword, newPassword })
        })
        const json = await response.json()

        if (!response.ok) {
            setPassError(json.message)
            setCurrentPass('')
            setNewPass('')
        }

        if (response.ok) {
            alert(json.message + ", please log with you new password!")
            logout()
        }
    }

    // handle name change
    const handleNameChange = (e) => {
        e.preventDefault()

        setNameError("This doesn't work, sorry 😭")
    }
    
    const firstName = fname.charAt(0).toUpperCase() + fname.slice(1)
    const lastName = lname.charAt(0).toUpperCase() + lname.slice(1)

    return ( 
        <div className="profileContainer">
            <Header title = "Profile" />
            <div className="userInfo">
                <div className="info">
                    <p className="nameTitle">{ firstName } { lastName }</p>
                    <p className="emailTitle">{ email }</p>
                </div>
                <Avatar src = "" alt = "" />
            </div>
            <div className="forms">
                <form onSubmit={handleNameChange}>    
                <p className="inputTitle">Change your name</p>
                <div className="inputsContainer">
                    <div className="inputs">
                        <label>First Name:</label>
                        <input type="text" name="fname" placeholder="First Name" />
                    </div>
                </div>

                <div className="inputsContainer">
                    <div className="inputs">
                        <label>Last Name:</label>
                        <input type="text" name="lname" placeholder="Last Name" />
                    </div>
                </div>
                {nameError && <div className="authError">{ nameError }</div>}
                <button className="profileButton">Save</button>
            </form>

            <form onSubmit={handlePassChange}>
                <p className="inputTitle">Change you password</p>
                <div className="inputsContainer">
                    <div className="inputs">
                        <label>Current password:</label>
                        <input
                        type="password"
                        onChange={(e) => setCurrentPass(e.target.value)}
                        value={currentPassword}
                        name="currentPassword"
                        placeholder="Current password"
                        />
                    </div>
                </div>

                <div className="inputsContainer">
                    <div className="inputs">
                        <label>New password:</label>
                        <input
                        type="password"
                        onChange={(e) => setNewPass(e.target.value)}
                        value={newPassword}
                        name="newPassword"
                        placeholder="New password" />
                    </div>
                </div>
                {passError && <div className="authError">{ passError }</div>}
                <button className="profileButton">Save</button>
            </form>
            </div>
        </div>
     );
}
 
export default Profile;
