import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
     const [name, setName] = useState("Set Your Name");

     return (
          <>
          <ProfileContext.Provider value={name}>
               <ProfileForm name={name} setName={setName}/>
               <h1>Profile App</h1>
               <Profile />
               <ProfileAddress />
          </ProfileContext.Provider>
          </>
     )
}