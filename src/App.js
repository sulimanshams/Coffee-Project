import './App.css';
import BigCard from './MainCardComponent';
import myImage from "D:/Coffe-Project-Excersise/coffee-project/src/assets/bg-cafe-lg.jpg"; 
import CoffeeGrid from './CoffeeCardList';

function App() {
  return (
    <>
    <div className="app" style={{position:"relative"}} >
      <img src={myImage} alt="banner" className="top-banner" />
      
      
    </div>
    <BigCard />
    <div style={{marginTop:"127px", marginLeft:"170px"}}>
    <CoffeeGrid />
    </div>
    </>
  );
}

export default App;
