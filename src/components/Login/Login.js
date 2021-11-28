import { useState } from "react";
import styles from "./Login.module.css"
import {getUser} from "../../services/auth";
import { useNavigate } from 'react-router-dom';

 function Login() {
  const navigate = useNavigate();

 async function onLoginHandler(e){
        e.preventDefault();
      
      let formData = new FormData(e.currentTarget);
    let username = formData.get('username');
    let password=formData.get('password')
    console.log(username);
  const user = await (getUser(username))
  console.log(user)

  if (user && user.password===password){
    alert (`${user.username}`);
    navigate('/');
  } else {
    alert("wrong usename or password!");
  }  
        }
        

  
    return (
      <div className={styles.form}>
  
    <div className={styles.title}>Вход</div>

    <div className={styles.subtitle}>Нямаш профил? Регистрация</div>
    <form onSubmit={onLoginHandler} method="POST">
     
      <div className={styles.inputContainer}>
        <input id="username" className={styles.input} name="username" type="text" placeholder=" " />
        <div className={styles.cut}></div>
        <label htmlFor="username" className={styles.placeholder}>Потребителско име</label>
      </div>


      <div className={styles.inputContainer}>
        <input id="password" className={styles.input} name="password" type="password" placeholder=" " />
        <div className={styles.cut}></div>
        <label htmlFor="password" className={styles.placeholder}>Парола</label>
      </div>

     
      <button >Вход</button>

      </form>
    </div>
    );
  }
  
  export default Login;