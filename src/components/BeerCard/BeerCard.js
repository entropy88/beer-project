import styles from "./BeerCard.module.css";
import {Link} from 'react-router-dom';

function BeerCard({beer}) {

  const packages=JSON.parse(beer.packages[0]);    
  
    return (
    <>
    <article className={styles.wrapperArticle}>
     <p className={styles.beerTitle}>{beer.title}</p>
     <img className={styles.beerImg} src={beer.imgUrl}/>
     <p>Тип: {beer.type}</p>
     <p>Опаковки: 
     {
            packages.map(el => <span key={el} className={styles.packagesSpan}> {el}l. </span>)
          }
       </p>
     <p>Рейтинг: {beer.rating}</p>
     <Link to={`/beers/${beer._id}`} className="details-button">Details</Link>
     <button>Детайли</button>
     </article>
     </>
    );
  }
  
  export default BeerCard;