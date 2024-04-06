import { useState } from 'react';
import Avatar from '../../assets/images/avatar.svg';
import './profile.css';

export default function Profile(){
    const [profilePhoto, setProfilePhoto] = useState(null);

    function onHandleChange(e){
        const file = e.target.files[0];
        setProfilePhoto(file);
    }

    return(
        <div className="dashboard-profile">
            <div className="profile-photo" onClick={() => document.getElementById("profile-photo-input").click()}>
                {
                    profilePhoto ? (<img src= {URL.createObjectURL(profilePhoto)} alt="profile" />) : (
                        <img className="avatar" src={Avatar} alt="avatar"/>
                    )
                }

                <input id="profile-photo-input" type="file" accept="/image*" onChange={onHandleChange}/>
            </div>
        </div>
    )
}