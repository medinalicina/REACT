import React from "react";

function Button  ({ props })  {
    return (
        <button onClick={() => alert('dodali ste artikal u korpu')}>
        Dodaj u korpu
        </button>
    )
    
}

export default Button;


