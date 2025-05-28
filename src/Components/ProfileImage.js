import React from "react";
import "../Style/ProfileImage.css";
import profilePic from "./Assets/My_Profile_Picture.jpg";

const ProfileImage = () =>{
    return (
        <div className = "profile-image-container">
            <img 
            src = {profilePic}
            alt = "Avisikta Majumder"
            className = "profile-image"
            />
        </div>
    );
};

export default ProfileImage;