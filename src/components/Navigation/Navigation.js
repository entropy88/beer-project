import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import CreateRecord from "../CreateRecord/CreateRecord";
import Register from "../Register/Register";
import Login from "../Login/Login";
import BeerDetails from "../BeerDetails/BeerDetails"
import styles from "./Navigation.module.css"


export default function Navigation() {
  return (
  
        <nav>
            <ul className={styles.topNav}>
                <li><Link to="/">Начало</Link></li>
           
                <li><Link to="/login">Вход</Link></li>
                <li><Link to="/register">Регистрация</Link></li>
                <li><Link to="/profile">Профил</Link></li>
                <li><Link to="/create-record">Добави бира</Link></li>               
            </ul>
          </nav>      

     
  );
}
