import styles from "./CustomToast.module.css";

function CustomToast() {
   
    return (
    <>
   <div className={styles.notificationWrapper}>
       <p>Вашият рейтинг беше успешно добавен!</p>
       </div>
    </>     
    );
  }
  
  export default CustomToast;