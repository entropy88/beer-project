import logo from './logo.svg';

import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import CreateRecord from './components/CreateRecord/CreateRecord';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import BeerDetails from './components/BeerDetails/BeerDetails';

function App() {
  return (
    <div className="App"> 
    
      <header className="mainHeader">
        <img src="Beer-icon.png"  className="headerImg" alt="beer"></img>
        <h1>Бирометър</h1>
    
      </header>
        <Navigation/>
        
        <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/create-record" component={CreateRecord} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/beers/:beerId" component={BeerDetails} />
                    <Route path="/custom">
                        <h2>Custom Page</h2>
                        <p>dasklfjasldf </p>
                    </Route>
                    <Route path="/logout" render={(props) => {
                        console.log('Logged Out!!!');

                        return <Redirect to="/" />
                    }} />
                </Switch>
    </div>
  );
}

export default App;
