import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as beerService from '../../services/beer';
import styles from "./BeerDetails.module.css";

const BeerDetails = () => {
    const [beer, setBeer] = useState({});
    const { beerId } = useParams();

    useEffect(async () => {
        let beerResult = await beerService.getOne(beerId);

        setBeer(beerResult);
    }, []);
    
    return (
        <section id="details-page" className="details">
            <div className={styles.beerWrapper} >
                <h3>{beer.title}</h3>
                <img src={beer.imgUrl}></img>
                <p>Произход: {beer.country}</p>     
                <p>Тип: {beer.type}</p>         
                <p>Рейтинг: {beer.rating}</p>    
                
            </div>
           
        </section>
    );
}

export default BeerDetails;
  
