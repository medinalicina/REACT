import React from 'react';
// import Card from './components/Card';
// import Button from './components/Button';
// //usestate cuva 
// import {domaci} from './componens/Domaci';
// import './componens/Domaci';
 
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}




// function App() {
//   return (
//     <div className="App">
//       <domaci />
//       <randomNumber number={22} />
//     </div>
//   );
// }



// export default function Profile() {
// return (
// <Avatar />
// );
// }

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );

// export default function Profile() {
// return (
// <Avatar />
// );
// }


// export default App;
//  export default domaci;








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
//      {//    <button onClick={()=> setBroj(broj+1)}>DODAJ</button>
//   {broj}
//   <button onClick={()=> setBroj(broj-1)}>SMANJI</button     // </div>
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
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}


const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}









const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}



const today = new Date();



