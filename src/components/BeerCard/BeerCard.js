import styles from "./BeerCard.module.css";
import {Link} from 'react-router-dom';

function BeerCard({beer}) {
  
  return (
    <>
    <article className={styles.wrapperArticle}>
     <p className={styles.beerTitle}>{beer.title}</p>
     <div className={styles.imgWrapper}> <img src={beer.imgUrl}></img></div>
     <p className={styles.description}>Тип: {beer.type}</p>
     <p>{[...Array(beer.averageRating)].map((e, i) => {
      return <span key={i}>&#127866;</span>
      })}</p>   
     
     {/* <button> */}
       <Link className={styles.detailsLink} to={`/beers/${beer._id}`}>Детайли</Link>
       {/* </button> */}
     </article>
     </>
    );

}
  
  export default BeerCard;