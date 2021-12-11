import styles from './Profile.module.css'
import { useState, useEffect } from 'react';
import { useContext } from "react/cjs/react.development";
import {AuthContext} from "../../Contexts/AuthContext";
import {getUser} from "../../services/auth";
import {getAll, getAllByUser} from "../../services/beer";
import {Link} from 'react-router-dom';
import BeerCard from '../BeerCard/BeerCard';

function Profile() {
  const [userDetails, setUserDetails] = useState({});
  const {user} =useContext(AuthContext);

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getUser(user.username)
            .then(userResult => {
                setUserDetails(userResult);
            })
  },[]);
 
  useEffect(() => {        
    getAllByUser(user._id)
        .then(result => {
        setBeers(result)
        })
  }, []);

  return (
  <>
    <article className={styles.wrapper}>
      <h1>{userDetails.username}</h1>
      <p>e-mail: {userDetails.email}</p>
      <p>Дата на регистрация: {userDetails.registrationDate}</p>
      {beers.length>0?<h3>Моите бири:</h3>:'' }
        
      <div className={styles.beersContainer}> 
       
        { beers.length > 0 
                ? beers.map(x =>
                <BeerCard key={x._id} beer={x}  />)
                : <h3 className={styles.noBeers}>Все още нямате създадени бири!</h3>
        }
      </div>  
    </article>
  </>
  );
}
  
  export default Profile;