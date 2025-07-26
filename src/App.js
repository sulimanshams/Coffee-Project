import './App.css';
import BigCard from './MainCardComponent';
import myImage from "D:/Coffe-Project-Excersise/coffee-project/src/assets/bg-cafe-lg.jpg"; 

function App() {
  return (
    <>
    <div className="app" style={{position:"relative"}} >
      <img src={myImage} alt="banner" className="top-banner" />
      
      
    </div>
    <BigCard />
    </>
  );
}

export default App;
