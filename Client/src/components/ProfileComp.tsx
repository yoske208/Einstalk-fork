import React, { useContext, useState } from "react";
import { UserConntext, UserProps } from "../Provider/UserProvider";
import Styles from '../pages/profile-page/profile.module.css'
export default function ProfileComp() {
  const userConntext = useContext<UserProps | null>(UserConntext)

  return (
    <>
      <div className="form-container">
          <div className="form-group">
          <img
          className={Styles.image}
           src="https://upload.wikimedia.org/wikipedia/he/f/fe/Generic_look_of_fantasy_films_1_-_made_with_DALL-E_3.png" alt="" />
            <label>username</label>
            <p>{userConntext?.user?.username}</p>
          </div>
      </div>
    </>
  );
}