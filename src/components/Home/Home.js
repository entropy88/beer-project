import { useEffect, useState } from 'react';
import styles from "./Home.module.css"

import * as beerService from '../../services/beer';
import BeerCard from '../BeerCard/BeerCard';


function Home() {

  const [beers, setBeers] = useState([]);
    
    useEffect(() => {        
            beerService.getAll()
                .then(result => {
                    setBeers(result);
                })
          }, []);
 
    return (
      <>
 
    <div className={styles.beerContainer}>     
    { beers.length > 0 
                ? beers.map(x => <BeerCard key={x._id} beer={x}  />)
                : <h3>No beers yet</h3>
            }
    </div>  
      </>
    );
  }
  
  export default Home;