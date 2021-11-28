import { useState } from "react";
import styles from "./Register.module.css"
import {create, getUser} from "../../services/auth";
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  async function onUserCreate(e){
    e.preventDefault();
  
    let formData = new FormData(e.currentTarget);
    let username = formData.get('username');
    let email=formData.get('email');
    let password=formData.get('password');
    let repeatPassword=formData.get('repeatPassword');
    const today = new Date();
    const registrationDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const newUser={
      username,
      email,
      password,
      registrationDate
    }
    
      console.log(newUser);

 

 const user=await getUser(username);
 console.log(user)

  // const registeredUser=await create(newUser);
  // console.log(registeredUser);
 }



  
    return (
      <div className={styles.form}>
    <div className={styles.title}>Създай профил</div>

    <div className={styles.subtitle}>Вече имаш профил? Вход</div>
    <form onSubmit={onUserCreate} method="POST">
     
      <div className={styles.inputContainer}>
        <input id="username" className={styles.input} type="text" name="username" placeholder=" " />
        <div className={styles.cut}></div>
        <label htmlFor="username" className={styles.placeholder}>Потребителско име</label>
      </div>


      <div className={styles.inputContainer}>
        <input id="password" className={styles.input} type="password" name="password" placeholder=" " />
        <div className={styles.cut}></div>
        <label htmlFor="password" className={styles.placeholder}>Парола</label>
      </div>

      <div className={styles.inputContainer}>
        <input id="repeatPassword" className={styles.input} type="password" name="repeatPassword" placeholder=" " />
        <div className={styles.cut}></div>
        <label htmlFor="repeatPassword" className={styles.placeholder}>Повтори паролата</label>
      </div>

      <div className={styles.inputContainer}>
        <input id="email" className={styles.input}  type="email" name="email" placeholder=" " />
        <div className={styles.cut}></div>
        <label htmlFor="email" className={styles.placeholder}>Email</label>
      </div>
      <button type="submit" >Вписване</button>
      </form>
    </div>
    );
  }
  
  export default Register;