import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App"> 
    
      <header className="mainHeader">
        <img src="./beer.JPG"  className="headerImg" alt="beer"></img>
        <h1>Бирометър</h1>
    
      </header>
        <Navigation/>
        
     
    </div>
  );
}

export default App;
