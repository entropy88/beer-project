import { useState } from "react";
import styles from "./Login.module.css";
import {Link} from "react-router-dom"
import {getUser} from "../../services/auth";
import { useNavigate } from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../Contexts/AuthContext";

import Error from "../Error/Error";

 function Login() {
  const { login }= useContext(AuthContext)
  const navigate = useNavigate();
  const [error,setError]=useState([])

 async function onLoginHandler(e){
   e.preventDefault();      
  let formData = new FormData(e.currentTarget);
  let username = formData.get('username');
  let password=formData.get('password')
 
  getUser(username)
  .then((data)=>{
    if(data.password===password){
      setError(oldArray => []);
      login(data);
      navigate('/')
    } else {
      setError(oldArray => [...oldArray, "Грешен потребител или парола!"]);    
     }
    })
.catch(err=>{
  setError(oldArray => [...oldArray, "Грешен потребител или парола!"]);    
  })
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
      {error.length>0?<Error errors={error}/>:""}
      </form>
    </div>
    );
  }
  
  export default Login;