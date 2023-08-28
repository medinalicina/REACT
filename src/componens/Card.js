import React from "react";
import './app.css';

function card(){
    return(
        <div className="app">
            <div name="card">
                <h1>BROJ CELZIJUSA</h1>
                <button onClick={() => alert("Promeni temperaturu")}>
        Promeni temperaturu
        </button>
            </div>
        </div>
    )
}

return(
    <div className="container">
        
    </div>
)





// const Card = ({  slika, ime, opis, cena }) => {
//     return (
//       <div className="Card">
//         {/* <img src={} /> */}
//         <h3>{"super star"}</h3>
//         <p>{"udobne patile sa debljim djonom, nepromocive i kvalitete"}</p>
//         <button onClick={() => alert('Uspesno ste dodali artikl u korpu')}>Dodaj u korpu</button>
//         <p>Cena: {18660} din</p>
//       </div>
//     );
//   };
  
//   export default Card;