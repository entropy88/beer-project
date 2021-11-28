import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as beerService from '../../services/beer';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import styles from "./BeerDetails.module.css";

const BeerDetails = () => {
    const [beer, setBeer] = useState({});
    const { beerId } = useParams();
    const navigate = useNavigate();

    useEffect(async () => {
        let beerResult = await beerService.getOne(beerId);
        setBeer(beerResult);
    }, []);

 function onBeerDelete(id){
console.log('proceed to delete', id);
beerService.removeBeer(id);
navigate('/');
 }

 //FIGURE THIS SHIT OUT
 console.log(beer.rating)
 console.log(beer.packages)

//  const overall= beer.rating.reduce(function (a, b) { return a + b; }, 0)
//  console.log(overall)
    
    return (
        <section id="details-page" className={styles.details}>
            <h3>{beer.title}</h3>
            <div className={styles.beerWrapper} >
            <article className={styles.imgWrapper}> <img src={beer.imgUrl}></img></article>
            <article className={styles.beerContent}>
                    <p className={styles.description}>Произход: {beer.country}</p>     
                    <p className={styles.description}>Тип: {beer.type}</p>    
                    <p className={styles.description}>Алкохолно съдържание: {beer.alcVol}</p> 
                    <p className={styles.description}>Опаковки: {beer.packages}</p>      
                    <p className={styles.description}>Рейтинг: {beer.rating}</p>    

                <article className={styles.buttonsRow}>
                    <button onClick={()=>onBeerDelete(beerId)}>Изтрий</button>
                    <button><Link to={`/update/${beer._id}`} className="details-button">Обнови</Link></button>
               </article>
            </article>
            </div>
            
           
        </section>
    );
}

export default BeerDetails;
  
