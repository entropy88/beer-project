import { useState } from "react";
import styles from "./Login.module.css"

function Login() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
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

     
      <button type="submit" >submit</button>
    </div>
    );
  }
  
  export default Login;