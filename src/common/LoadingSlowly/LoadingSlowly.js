import styles from "./LoadingSlowly.module.css";

function LoadingSlowly() {
   
    return (
    <>
  <div className={styles.wrapper}>
   <div className={styles.gifWrapper}>
   <img src="https://commenathletics.com/wp-content/themes/commenathletics/commenathletics/images/loading.gif"></img>
    </div>
  </div>      
    </>   
      
    );
  }
  
  export default LoadingSlowly;