import styles from "./BeerDetails.module.css";
import BeerRating from "../BeerRating.js/BeerRating";

function BeerDetails() {


  
    return (
    <>
    <article className={styles.beerWrapper}>
      <article className={styles.imgWrapper}>
      <img src="https://images.everydayhealth.com/images/everything-you-need-to-know-about-nonalcoholic-beer-1440x810.jpg" alt="beer"></img>
      </article>
      <article className={styles.beerContent}>
        <h2>Title</h2>
        <label className={styles.beerContentLabel}>Тип: </label>
         <label className={styles.beerContentLabel}>Алкохолно съдържание:
          </label><label className={styles.beerContentLabel}>Опаковки: </label>
          <label className={styles.beerContentLabel}>Произход: </label>
          <article className={styles.beerContentRow}>
        <label className={styles.beerContentLabel}>Рейтинг: </label>
        <BeerRating ratingValue={2} /* RatingView Props */ />
        </article>
       
  
       
      </article>
     
    
     </article>
     </>
    );
  }
  
  export default BeerDetails;