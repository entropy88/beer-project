import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import CreateRecord from "../CreateRecord/CreateRecord";
import Register from "../Register/Register";
import Login from "../Login/Login";
import styles from "./Navigation.module.css"


export default function Navigation() {
  return (
    <Router>
        <nav>
            <ul className={styles.topNav}>
                <li><Link to="/">Начало</Link></li>
           
                <li><Link to="/login">Вход</Link></li>
                <li><Link to="/register">Регистрация</Link></li>
                <li><Link to="/profile">Профил</Link></li>
                <li><Link to="/create">Добави бира</Link></li>
            </ul>
          </nav>      

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile />}/> 
        <Route path='/create' element={<CreateRecord/>}/>
             </Routes>
    </Router>
  );
}
