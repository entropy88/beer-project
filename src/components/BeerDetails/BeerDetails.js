import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as beerService from '../../services/beer';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import styles from "./BeerDetails.module.css";

import { useContext } from "react/cjs/react.development";
import {AuthContext} from "../../Contexts/AuthContext";

const BeerDetails = () => {
    const [beer, setBeer] = useState({});
    const [rating, setRating] = useState(0);
    const [userRating, setUserRating] = useState(0);
    const [usersRated, setUsersRated] =useState([]);
    const [hover, setHover] = useState(0);
    const { beerId } = useParams();

    const {user} =useContext(AuthContext);
    const navigate = useNavigate();

    //extracts the id's of the users that rated the beers
    function getUsersThatRated (arr){
        const users=arr.map(x=>x.userRated)
        return users;
    }

    //extracts the average rating
    function getRating(arr){
        const valuesArr=arr.map(x=>x.value);
        const sum = valuesArr.reduce(function(a, b){
            return a + b;
            }, 0);
        const average= Math.round(sum/arr.length);
        return average;        
    }
   

useEffect(() => {
   beerService.getOne(beerId)
    .then(beerResult=>{
        console.log(beerResult.rating)
       setBeer(beerResult)
       setUsersRated(getUsersThatRated(beerResult.rating)) 
       setRating(getRating(beerResult.rating))
    })   

    }, []);    
  
function onBeerDelete(id){
beerService.removeBeer(id);
navigate('/');
}

async function onUserRating(r){
    let updatedBeer=Object.assign(beer); 
    const indexOfRecordToUpdate=beer.rating.findIndex(x=>x.userRated==user._id);
    console.log('indexToUpdate', indexOfRecordToUpdate)
    const newRating={userRated:user._id,value:r}
    console.log(newRating)
    if (indexOfRecordToUpdate<0){
     updatedBeer.rating.push(newRating);    
    } else {
       const removedOld=beer.rating.splice(indexOfRecordToUpdate,1)
       beer.rating.push(newRating);
       updatedBeer.rating=beer.rating;
    }
    
    
    const result= await beerService.updateBeer(beerId, updatedBeer);
    setUserRating(r);  
}


const staticRating=(
    <p className={styles.rating}>{[...Array(rating)].map((e, i) => {
        return <span key={i}>&#127866;</span>
        })}</p>
)

const ownerButtons=(<>
<button><Link to={`/update/${beer._id}`} className="details-button">Обнови</Link></button>
<button onClick={()=>onBeerDelete(beerId)}>Изтрий</button>
</>)



//check if current user can rate

let userCanRate=user.hasOwnProperty('_id');
if (user._id==beer.ownerId){
    userCanRate=false;
}

const ratingButtons=(
    <div className={styles.rating}>
    {[...Array(5)].map((star, index) => {
    index += 1;
    return (
    <button 
    type="button"
    key={index}
    className={  index <= (hover || rating) ? styles.on : styles.off }
    onClick={function(){
    setRating(index);
    onUserRating(index);
    }}
    onMouseEnter={() => setHover(index)}
    onMouseLeave={() => setHover(rating)}
    >
    <span>&#127866;</span>
    </button>
    );
    })}

  </div>
)
    
return (
    <section id="details-page" className={styles.details}>     
        <div className={styles.beerWrapper} >
        <article className={styles.imgWrapper}> <img src={beer.imgUrl}></img></article>
        <article className={styles.beerContent}>
        <h3>{beer.title}</h3>
            <p className={styles.description}>Произход: {beer.country}</p>     
            <p className={styles.description}>Тип: {beer.type}</p>    
            <p className={styles.description}>Алкохолно съдържание: {beer.alcVol}% vol</p>       
          
            {userCanRate?ratingButtons:staticRating}    

            <article className={styles.buttonsRow}>
                {user._id==beer.ownerId?ownerButtons :''}                  
            </article>                      
           
        </article>
        </div>
    </section>
    );
}

export default BeerDetails;
  
