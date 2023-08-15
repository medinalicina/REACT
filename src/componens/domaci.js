import React from "react";
import "./domaci.css";
import Button from "./Button";
import Card from "./Card";

function Domaci(){
    function randomNumber(min, max) {
        return Math.random() * (min - max) + min;
    }
    return(
        <div className="app">
            <div name='Card'>
                <h1>BROJ CELZIJUSA</h1>
                <button onClick={() => console.log(randomNumber(-36, 48))}>
                Promeni temperaturu
                </button>
            </div>
        </div>
    );
}

function randomNumber({number}) {
    return (
        <div className="container">
            <h1>{number}</h1>
            {number < -3 && <h1>Hladno je</h1>}
            {number> 23 && <h1>Toplo je</h1>}
        </div>
    )
}

// checkTemperature = () => {
//     const { temperature } = this.state;
//     if (temperature === ) {
//       this.setState({ message: 'Toplo je!' });
//     } else {
//       this.setState({ message: 'Nije toplo.' });
//     }
//   };


export default App;