import { useContext } from "react";
import {useState} from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import styles from "./Register.module.css"
import {Link} from "react-router-dom"
import {create, getUser} from "../../services/auth";
import { useNavigate } from 'react-router-dom';
import registerFormValidation  from "../../utils/registerFormValidation";
import Error from "../Error/Error";

function Register() {
  const [userExists, setUserExists]=useState(false);
  const {login}=useContext(AuthContext);
  const [errors, setErrors]=useState([]); 
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

    const validationErrors=registerFormValidation(newUser,repeatPassword);
    setErrors([...validationErrors]);

    //check if there are errors
    if (validationErrors.length<1){

      //set state is too slow, therefore using ordinary variable
    let existingUser=false;

    //CHECK IF USER ALREADY EXISTS
   await getUser(username)
    .then((data)=>{
      if(data){            
        existingUser=true;        
        setUserExists(true);        
        return;
       }
      })
    .catch(err=>{
     console.log('dont mind me, just caching an error');
     console.log(err)      
    })


    if (existingUser==false){
      console.log(existingUser)
      console.log('no such user, proceed')
      await create(newUser)
      .then(data=>{
      setUserExists(false);
      login(data);
      navigate('/')
    })
  }

  }

}
  
  return (
    <div className={styles.form}>
     <div className={styles.title}>Създай профил</div>
     <div className={styles.subtitle}>Вече имаш профил? <Link className={styles.navigateLink} to="/login" >Вход</Link></div>
    
     <form onSubmit={onUserCreate} method="POST">     
      <div className={styles.inputContainer}>
        <label htmlFor="username" className={styles.placeholder}>Потребителско име</label>
        <input id="username" type="text" name="username" placeholder=" " />   
        {userExists?<p className={styles.errorP}>Потребителското име вече е заето!</p>:""}     
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.placeholder}>Парола</label>
        <input id="password" type="password" name="password" placeholder=" " />      
      </div>

      <div className={styles.inputContainer}>
       <label htmlFor="repeatPassword" className={styles.placeholder}>Повтори паролата</label>
        <input id="repeatPassword" type="password" name="repeatPassword" placeholder=" " />        
      </div>

      <div className={styles.inputContainer}>
      <label htmlFor="email" className={styles.placeholder}>Email</label>
        <input id="email" type="email" name="email" placeholder=" " />      
      </div>
      {errors.length>0?<Error errors={errors}/>:""}
      <button className={styles.submitButton} type="submit" >Регистрация</button>

      </form>
    </div>      
    
  );
}
  
export default Register;