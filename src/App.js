import logo from './logo.svg';
import './style.css';
import React, {useState} from "react";
import ReactDOM from 'react-dom/client';
import Product from "./component/Product";



function App () {

  return(

<div className={"container"}>
<main className={"main"}>


  <h1> Sneakers Wear</h1>

  <div className={"grid"} >

    {product.map((product,i) => <Product {...product} key={i}/>)
    
    
    }

    



  </div>
  
  </main>





</div>



  )




}




export default App;