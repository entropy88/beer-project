import { useState } from "react";
import styles from "./Register.module.css"

function Register() {
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
    <div className={styles.title}>Създай профил</div>

    <div className={styles.subtitle}>Вече имаш профил? Вход</div>
     
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

      <div className={styles.inputContainer}>
        <input id="repeatPassword" className={styles.input} type="password" placeholder=" " />
        <div className={styles.cut}></div>
        <label for="repeatPassword" className={styles.placeholder}>Повтори паролата</label>
      </div>

      <div className={styles.inputContainer}>
        <input id="email" className={styles.input}  type="text" placeholder=" " />
        <div className={styles.cut}></div>
        <label for="email" className={styles.placeholder}>Email</label>
      </div>
      <button type="submit" >Вписване</button>
    </div>
    );
  }
  
  export default Register;