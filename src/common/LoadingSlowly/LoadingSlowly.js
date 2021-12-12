import styles from "./LoadingSlowly.module.css";

function LoadingSlowly() {
   
    return (
    <>
   <div className={styles.turtleWrapper}>
   <img src="../../images/turtle.gif"></img>
       </div>
    </>     
    );
  }
  
  export default LoadingSlowly;