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

                        <article className={styles.beerContentRow}>
                        <label className={styles.beerContentLabel}>Тип: </label>
                        <p>{beer.type}</p>
                        </article>

                        <article className={styles.beerContentRow}>
                        <label className={styles.beerContentLabel}>Алкохолно съдържание: </label>
                        <p>{beer.alcVol}</p>
                        </article>
                 
                        <article className={styles.beerContentRow}>
                        <label className={styles.beerContentLabel}>Рейтинг: </label>
                        <p>{beer.rating}</p>
                        </article>
                 
                        <article className={styles.beerContentRow}>
                        <label className={styles.beerContentLabel}>Опаковки: </label>
                      <p>{beer.packages}</p>
                        </article>
                 
              
           
                </article>
              
                <div >
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
          

           

        </section>
    );
}

export default BeerDetails;

  
