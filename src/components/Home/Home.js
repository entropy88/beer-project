import { useEffect, useState } from 'react';
import styles from "./Home.module.css"

import * as beerService from '../../services/beer';
import BeerCard from '../BeerCard/BeerCard';


function Home() {

  const [beers, setBeers] = useState([]);
    
    useEffect(() => {        
            beerService.getAll()
                .then(result => {
              //map to average rating
              const mapped=result.map(beer=>beer.rating=getAverageRating(beer));
              //sort by rating
              const sorted=mapped.sort((a,b)=> b.averageRating-a.averageRating)
              setBeers(sorted)
                })
          }, []);
 

    function getAverageRating(beer){
      const valuesArr=beer.rating.map(x=>x.value);
      const sum = valuesArr.reduce(function(a, b){
      return a + b;
      }, 0);  
      const averageRating=Math.round(sum/valuesArr.length);
      beer.averageRating=averageRating;
      return beer;
    }      
          
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