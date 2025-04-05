import React from "react";
import { ProfileContainerStyle } from "./ProfileStyle";
import { ProfileDetails } from "../../common/constants/ProfileConstants";
import { Chip } from "@mui/material";
import profileImg from "../../common/assets/Profile.png";


const Profile = () => {
  return (
    <ProfileContainerStyle>
      <section className="left-content">
        <h2 className="header"> {ProfileDetails.title} </h2>
        <p>{ProfileDetails.description}</p>
        <div className="skills">
          {
            ProfileDetails.skills.map((skill,indx) => <Chip className="chip" key = {indx} label = {skill} />)
          }
        </div>
      </section>
      <section className="right-content">
        <div className="bg"></div>
        <img src={profileImg} alt="" />
      </section>
    </ProfileContainerStyle>
  );
};

export default Profile;
