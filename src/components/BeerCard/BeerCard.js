import styles from "./BeerCard.module.css";
import {Link} from 'react-router-dom';


function BeerCard({beer}) {
  const sum = beer.rating.reduce(function(a, b){
  return a + b;
  }, 0);

  const rating=Math.round(sum/beer.rating.length);
  
    return (
    <>
    <article className={styles.wrapperArticle}>
     <p className={styles.beerTitle}>{beer.title}</p>
     <div className={styles.imgWrapper}> <img src={beer.imgUrl}></img></div>
     <p className={styles.description}>Тип: {beer.type}</p>
     <p>{[...Array(rating)].map((e, i) => {
      return <span key={i}>&#127866;</span>
      })}</p>
   
     
     <button><Link to={`/beers/${beer._id}`} className="details-button">Детайли</Link></button>
     </article>
     </>
    );
  }
  
  export default BeerCard;