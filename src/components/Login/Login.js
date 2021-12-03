import { useState } from "react";
import styles from "./Login.module.css";
import {Link} from "react-router-dom"
import {getUser} from "../../services/auth";
import { useNavigate } from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../Contexts/AuthContext"

 function Login() {
  const { login }= useContext(AuthContext)
  const navigate = useNavigate();

 async function onLoginHandler(e){
   e.preventDefault();      
  let formData = new FormData(e.currentTarget);
  let username = formData.get('username');
  let password=formData.get('password')
 
  getUser(username)
  .then((data)=>{
    //check if password is correct!
    login(data);
     navigate('/')
  })
  .catch(err=>{
    console.log(err)
  })
//  if (!user){
//    alert('no such user!')
//  }

//   if (user && user.password===password){
//     alert (`${user.username}`);
//     navigate('/');
//   } else {
//     alert("wrong usename or password!");
//   }  
        }

return (
  <div className={styles.form}>  
    <div className={styles.title}>Вход</div>
    <div className={styles.subtitle}>Нямаш профил? <Link className={styles.navigateLink} to="/register" >Регистрация</Link></div>
    
    <form onSubmit={onLoginHandler} method="POST">
     
      <div className={styles.inputContainer}>
        <label htmlFor="username" className={styles.placeholder}>Потребителско име</label>
        <input id="username" name="username" type="text" placeholder=" " />              
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.placeholder}>Парола</label>
        <input id="password" name="password" type="password" placeholder=" " />       
      </div>     
      <button className={styles.submitButton}>Вход</button>

      </form>
    </div>
    );
  }
  
  export default Login;