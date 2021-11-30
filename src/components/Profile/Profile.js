import { useState, useEffect } from 'react';

import { useContext } from "react/cjs/react.development";
import {AuthContext} from "../../Contexts/AuthContext";
import {getUser} from "../../services/auth"

function Profile() {
  const [userDetails, setUserDetails] = useState({});

  const {user} =useContext(AuthContext);

  useEffect(() => {
    getUser(user.username)
            .then(userResult => {
                setUserDetails(userResult);
            })
  },[]);
 

    return (
      <>
       <h1>{userDetails.username}</h1>
       <h1>{userDetails.email}</h1>
       <h1>{userDetails.registrationDate}</h1>
      </>
    );
  }
  
  export default Profile;