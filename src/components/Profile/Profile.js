import styles from './Profile.module.css'
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
      <article className={styles.wrapper}>
       <h1>{userDetails.username}</h1>
       <p>e-mail: {userDetails.email}</p>
       <p>Дата на регистрация: {userDetails.registrationDate}</p>
       </article>
      </>
    );
  }
  
  export default Profile;