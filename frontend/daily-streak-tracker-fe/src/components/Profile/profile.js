import './profile.css';
import EditProfile from '../Buttons/editProfileButton/editProfile';
import Avatar from '../../assets/images/avatar.svg';
import History from '../Buttons/historyButton/history';
import { useState } from 'react';

export default function Profile(){
    const [profilePhoto, setProfilePhoto] = useState(null);

    function onHandleChange(e){
        const file = e.target.files[0];
        setProfilePhoto(file);
    }

    return(
        <div className="dashboard-profile">
            <section className="profile-section">
            <div className="profile-photo" onClick={() => document.getElementById("profile-photo-input").click()}>
                {
                    profilePhoto ? (<img src= {URL.createObjectURL(profilePhoto)} alt="profile" />) : (
                        <img className="avatar" src={Avatar} alt="avatar"/>
                    )
                }

                <input id="profile-photo-input" type="file" accept="/image*" onChange={onHandleChange}/>
            </div>
            <div className="profile-name">
                <h3 className="name">Name</h3>
            </div>
            <div className="profile-editProfile">
                <EditProfile />
            </div>

            </section>

            <div className="profile-history">
                <History />
            </div>
        </div>
    )
}