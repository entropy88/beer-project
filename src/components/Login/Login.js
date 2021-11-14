import { useState } from "react";
import styles from "./Login.module.css"

function Login() {
  const [user, setUser] = useState("");

  function onLogin(){
    setUser("someUser");
    console.log(user)
  }

   
  
    return (
      <div className={styles.form}>
    <div className={styles.title}>Вход</div>

    <div className={styles.subtitle}>Нямаш профил? Регистрация</div>
     
      <div className={styles.inputContainer}>
        <input id="username" className={styles.input} type="text" placeholder=" " />
        <div className={styles.cut}></div>
        <label for="username" className={styles.placeholder}>Потребителско име</label>
      </div>


      <div className={styles.inputContainer}>
        <input id="password" className={styles.input} type="password" placeholder=" " />
        <div className={styles.cut}></div>
        <label for="password" className={styles.placeholder}>Парола</label>
      </div>

     
      <button onClick={onLogin} >Вход</button>
    </div>
    );
  }
  
  export default Login;