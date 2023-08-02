import logo from './logo.svg';
import './App.css';

function App() {
  const customStyle ={
    color:"pink",
    fontSize: "23px",
  }
  const onClickHandler= () => console.log("MEDINA")
  return (
    <div>
      <h1 style={customStyle} onClick={onClick}></h1>
    <button onClick={() => console.log("kliknula")}> Klikni</button>
    </div>
     
  );
}

export default App;
