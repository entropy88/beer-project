import styles from "./BeerCard.module.css";
import {Link} from 'react-router-dom';

function BeerCard({beer}) {


  
    return (
    <>
    <article className={styles.wrapperArticle}>
     <p className={styles.beerTitle}>{beer.title}</p>
     <div className={styles.imgWrapper}> <img src={beer.imgUrl}></img></div>
     <p className={styles.description}>Тип: {beer.type}</p>
     <p className={styles.description}>Опаковки: 
     {beer.packages.map(el => <span key={el} className={styles.packagesSpan}> {el}l. </span>)}
       </p>
     <p className={styles.description}>Рейтинг: {beer.rating}</p>
     
     <button><Link to={`/beers/${beer._id}`} className="details-button">Детайли</Link></button>
     </article>
     </>
    );
  }
  
  export default BeerCard;