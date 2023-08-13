import React, { useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';
//usestate cuva 
import React, { Component } from 'react';
import './domaci.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: Math.floor(Math.random() * 100), // Generiše slučajan broj temperature
      message: '',
    };
  }

  checkTemperature = () => {
    const { temperature } = this.state;
    if (temperature === 42) {
      this.setState({ message: 'Toplo je!' });
    } else {
      this.setState({ message: 'Nije toplo.' });
    }
  };

  // render() {
  //   return (
  //     <div className="App">
  //       <h1>Provera Temperature</h1>
  //       <p>Trenutna temperatura: {this.state.temperature} stepeni</p>
  //       <button onClick={this.checkTemperature}>Proveri</button>
  //       <p>{this.state.message}</p>
  //     </div>
  //   );
  // }
}

export default App;













  // const fetchData = () => {
     //   fetch("https://dummyjson.com/products")
     //     .then((res) => res.json())
        // .then((someData) => someData.filter((el) => ........................))
   //     .then((data) => setAllData(data.products));
  //    };
  //   }
    

    // const [isSwitchOn, setIsSwitchOn] = useState(false);
    // console.log(isSwitchOn);
  
    // return (
    //   <div className="app">
    //     {/* {!allData.length && (
          // <div style={{ marginTop: "300px", textAlign: "center" }}>
          //   <h1>Nema podataka</h1>
          //   <button onClick={() => fetchData()}>Fetchaj podatke</button>
          // </div>








  //stekoverflov
  // const[broj, setBroj] = useState(0);
  // return (
  //    <div className='app'>
  //   {customProducts.map((product)=> (
  //     <Card 
  //     title={product.title}
  //     description={product.description}
  //     price={product.price}/>
  //   ))}
  //    </div>
  //    return (
  //     <div className='app'>
  //    {customProducts.map((product)=> (
  //      <Card 
  //      title={product.title}
  //      description={product.description}
  //      price={product.price}/>
  //    ))}
  //     </div
  //     return (
  //    <div className='app'>
  //   {customProducts.map((product)=> (
  //     <Card 
  //     title={product.title}
  //     description={product.description}
  //     price={product.price}/>
  //   ))}
  //    </div>




//


















//      {//    <button onClick={()=> setBroj(broj+1)}>DODAJ</button>
//     //   {broj}
//     //   <button onClick={()=> setBroj(broj-1)}>SMANJI</button>
//     // </div>
//     <div className="app">
//       <h1>Dobrodošli u prodavnicu patika</h1>
//       <Card
//         image={''}
//         title="Patike Jordan"
//         description="Ovo su neverovatne patike koje ćete obožavati!"
//         price={20000}
//       />
//       <Button price={20000} />
//     </div>
//   );
