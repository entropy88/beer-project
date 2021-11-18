import { useState, useEffect } from 'react';
import * as beerService from '../../services/beer';
import styles from './BeerDetails.module.css'
const BeerDetails = ({
    match,
}) => {
    const [beer, setBeer] = useState({});

    useEffect(async () => {
        let result = await beerService.getOne(match.params.beerId);
        console.log(result)

        setBeer(result);
    }, []);

    return (
        <section className={styles.beerWrapper}>
            <h1>{beer.title}</h1>           
             
                  <article className={styles.imgWrapper}>
                    <img className="beer-img" src={beer.imgUrl} />
                    </article>

                    <article className={styles.beerContent}>
                    <p className="type">{beer.type}</p>
              
                <p>Rating:{beer.rating}</p>
                <p>Packages{beer.packages}</p>
                </article>
              
                <div >
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
          

           

        </section>
    );
}

export default BeerDetails;

  
