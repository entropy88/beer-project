import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import {AuthContext} from "../../Contexts/AuthContext";

import styles from "./Navigation.module.css"


export default function Navigation() {
  const {user} =useContext(AuthContext);

  const guestLinks=(
    <div><li><Link to="/login">Вход</Link></li>
    <li><Link to="/register">Регистрация</Link></li></div>
  );
  const userLinks=(
    <div>  <li><Link to="/profile">Профил</Link></li>
    <li><Link to="/create">Добави бира</Link></li>  </div>
  );

 
  return (  
        <nav>
            <ul className={styles.topNav}>
                <li><Link to="/">Начало</Link></li>
                {user.username
                ?userLinks
                :guestLinks}
            </ul>
          </nav>      
  );
}
