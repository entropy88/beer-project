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
    
    return (
        <section id="details-page" className="details">
            <div className={styles.beerWrapper} >
                <h3>{beer.title}</h3>
                <img src={beer.imgUrl}></img>
                <p>Произход: {beer.country}</p>     
                <p>Тип: {beer.type}</p>         
                <p>Рейтинг: {beer.rating}</p>    
                
            </div>
            <button onClick={()=>onBeerDelete(beerId)}>iztrii</button>
            <Link to={`/update/${beer._id}`} className="details-button">Update</Link>
           
        </section>
    );
}

export default BeerDetails;
  
