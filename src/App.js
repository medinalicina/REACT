import React, { useState } from 'react';
// import Card from './components/Card';
// import Button from './components/Button';

const App = () => {
  const[broj, setBroj] = useState(0);
  return (
    // <div className='app'>
    //   <button onClick={()=> setBroj(broj+1)}>DODAJ</button>
    //   {broj}
    //   <button onClick={()=> setBroj(broj-1)}>SMANJI</button>
    // </div>
    <div className="app">
      <h1>Dobrodošli u prodavnicu patika</h1>
      <Card
        image={''}
        title="Patike Jordan"
        description="Ovo su neverovatne patike koje ćete obožavati!"
        price={20000}
      />
      <Button price={20000} />
    </div>
  );
};

export default App;
