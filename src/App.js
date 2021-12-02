import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from './Contexts/AuthContext';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import CreateRecord from './components/CreateRecord/CreateRecord';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import BeerDetails from './components/BeerDetails/BeerDetails';
import UpdateRecord from './components/UpdateRecord/UpdateRecord';

function App() {
  const [user, setUser] = useState({});

  const login = (authData) => {
   
    const middleUser={
      _id:authData._id,
      username:authData.username  
    }
     setUser(Object.assign(middleUser));
    console.log(user)
  }

  const onLogout = () => {

  };

  function RequireAuth() {
   
    let location = useLocation();
  
    if (!user.username) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} />;
    }
  
    return <Outlet />;
  }


  return (
    <AuthContext.Provider value={{user, login}}>
    <div className="App"> 
    
      <header className="mainHeader">
        <img src="Beer-icon.png"  className="headerImg" alt="beer"></img>
        <h1>Бирометър</h1>
    
      </header>
        <Navigation/>

        <Routes>
            <Route path="/*" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            
            <Route path="/register" element={<Register/>} />
            <Route element={<RequireAuth />}>
            <Route path="/profile" element={<Profile />} />
           
          </Route>
           
            <Route path="/create" element={<CreateRecord/>} />
            <Route path="/update/:beerId" element={<UpdateRecord/>} />
            <Route path="/beers/:beerId" element={<BeerDetails/>} />
          </Routes>
           
    </div>
    </AuthContext.Provider>
  );
}

export default App;
