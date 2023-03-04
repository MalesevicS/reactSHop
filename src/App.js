import { useState,useEffect } from "react";
import React from "react";
import Store from "./components/Store";

import {BrowserRouter,Routes,Route} from "react-router-dom"


function App(props){
const [StoreItem,setStoreItem]=useState([])

useEffect(()=>{
   const fetchData=async()=>{
    const result=await fetch(`https://fakestoreapi.com/products`)
    result.json().then(json=>
      setStoreItem(json))
   }
   fetchData();
})

return(
  


<div className="app">
 <Store items={StoreItem} onItemAdd={(itemData)=>{
 setStoreItem([...StoreItem,itemData])
 }} />
</div>

)


}

export default App;
