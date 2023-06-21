import React from 'react';
import Lottie from 'react-lottie';
type Props = {
    Imagepath: string;
  };
  

const Profile = ({ Imagepath }: Props) => {
    return (
      <div className="profile-picture-container">
        <div className="profile-picture-wrapper">
          <div className="profile-picture-frame">
            <img className="profile-picture" src={Imagepath} alt="Profile" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;