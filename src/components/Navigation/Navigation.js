import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import {AuthContext} from "../../Contexts/AuthContext";

import styles from "./Navigation.module.css"


export default function Navigation() {
  const {user} =useContext(AuthContext);
  const {logout}=useContext(AuthContext);

  const guestLinks=(
    <>
    <li><Link to="/login">Вход</Link></li>
    <li><Link to="/register">Регистрация</Link></li>
    </>
  );
  const userLinks=(
    <>  
    <li><Link to="/create">Добави бира</Link></li> 
    <li><Link to="/profile">Профил на {user.username}</Link></li>
    <li> <Link to="#" onClick={()=>logout()}>Изход</Link></li>
    </>
  );

 
  return (  
        <nav>   
          <article className={styles.logo}>
          <img src="Beer-icon.png"  className="headerImg" alt="beer"></img>
          </article>     
    
            <ul className={styles.topNav}>
                <li><Link to="/">Бири</Link></li>
                {user.username
                ?userLinks
                :guestLinks}
            </ul>
          </nav>      
  );
}
