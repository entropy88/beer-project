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
    const [hover, setHover] = useState(0);
    const { beerId } = useParams();

    const {user} =useContext(AuthContext);
    const navigate = useNavigate();
   

useEffect(async () => {
    let beerResult = await beerService.getOne(beerId);
    setBeer(beerResult);

    const sum = beerResult.rating.reduce(function(a, b){
        return a + b;
        }, 0);
    
    setRating(Math.round(sum/beerResult.rating.length));
    }, []);    
  
function onBeerDelete(id){
console.log('proceed to delete', id);
beerService.removeBeer(id);
navigate('/');
 }

async function onUserRating(r){
    let updatedBeer=Object.assign(beer);   
    updatedBeer.rating.push(r);
    console.log(beerId)
    const result= await beerService.updateBeer(beerId, updatedBeer);
    console.log(result)
}

const ownerButtons=(<>
<button onClick={()=>onBeerDelete(beerId)}>Изтрий</button>
<button><Link to={`/update/${beer._id}`} className="details-button">Обнови</Link></button>
</>)

const staticRating=(
    <p>{[...Array(rating)].map((e, i) => {
        return <span key={i}>&#127866;</span>
        })}</p>
)

const ratingButtons=(
    <div className={styles.userRating}>
    {[...Array(5)].map((star, index) => {
    index += 1;
     return (
     <button
     type="button"
    key={index}
    className={index <= (hover || rating) ? "on" : "off", styles.starButton}
    onClick={function(){
    setUserRating(index);
    onUserRating(index)
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
        <h3>{beer.title}</h3>
        <div className={styles.beerWrapper} >
        <article className={styles.imgWrapper}> <img src={beer.imgUrl}></img></article>
        <article className={styles.beerContent}>
            <p className={styles.description}>Произход: {beer.country}</p>     
            <p className={styles.description}>Тип: {beer.type}</p>    
            <p className={styles.description}>Алкохолно съдържание: {beer.alcVol}</p>       
            <p className={styles.description}>Рейтинг: {staticRating}</p>    

            <article className={styles.buttonsRow}>
                {user._id==beer.ownerId?ownerButtons :''}                  
            </article>

            {user._id?ratingButtons:''}
           
        </article>
        </div>
    </section>
    );
}

export default BeerDetails;
  
