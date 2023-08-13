import React from "react";
import "./domaci.css";
import Button from "./Button";
import Card from "./Card";

function domaci(){
    function getRandomArbitarary(min, max) {
        return Math.random() * (min - max) + min;
    }
    return(
        <div className="app">
            <div name='Card'>
                <h1>BROJ CELZIJUSA</h1>
                <button onClick={() => console.log(getRandomArbitrary(-36, 48))}>
                Promeni temperaturu
                </button>
            </div>
        </div>
    );
}


checkTemperature = () => {
    const { temperature } = this.state;
    if (temperature === ) {
      this.setState({ message: 'Toplo je!' });
    } else {
      this.setState({ message: 'Nije toplo.' });
    }
  };


export default App;