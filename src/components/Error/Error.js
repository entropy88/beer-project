import styles from "./Error.module.css";

function Error({errors}) {
   
    return (
    <>
    {errors.map(x=><p className={styles.errorP} key={x}>{x}</p>)}
    </>     
    );
  }
  
  export default Error;