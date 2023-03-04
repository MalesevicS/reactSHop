import React from "react"
import { useState,useRef } from "react"


const StoreItem=({item,price,image,title})=>{
    return <div style={stil}>
        <img style={slikaStil} src={image}></img>
        <h1>Title:{title}</h1>
        <p style={priceStyle}>Price:${price}</p>
    </div>
}

function Store({items,onItemAdd}){
    // const itemName=useRef();
    // const ItemPrice=useRef();

    const[filterdItems,setFilterdItems]=useState(items);

    return(
        <div style={stil}>

            <div style={stil2}>

            
            
                <div style={headerStyle}>
                <h1 style={stil2}>React Api Store</h1>
                <img  src="logo192.png"></img>
                </div>

                <input onChange={(e)=>{
                    
                    let f=items.filter(item=> item.title.toLowerCase().includes(e.target.value.toLowerCase()));
                    console.log("f",f)
                    setFilterdItems(f);
                        
                }} 
                style={inputstil} placeholder="Search"></input>
            </div>
            <div style={storeStyle}>
            {items.map(item=>{
                return (

                <StoreItem {...item}/>   

                )
            })}
            </div>



            {/* <input ref={itemName} placeholder="Item name..."></input>
            <input ref={ItemPrice} type={Number} placeholder="Price"></input>
            <button onClick={()=>{
                onItemAdd({
                    title:itemName.current.value,
                    price:ItemPrice.current.value,

                })
            }}>ADD ITEM</button> */}

        </div>
    )


}




let headerStyle={
    display:"flex",
    justifyContent:`space-between`,
    borderBottom:`3px solid black`,
    
    
 }

 let storeStyle={
    display: `grid`,
    gridTemplateColumns: `1fr 1fr 1fr`,
    gridGap: 10,
    padding: 10,
    justifyContent:`center`,
    textAlign:`center`
 }

let stil={
    padding:4,
    border: '2px solid black',
    justifyContent:"spaceBetween ",
    alignItems:"center",
    
}
let stil2={
    textAlign: "center",
    fontFamily: '-apple-system',
    fontSize: "5rem",
    fontWeight: 0.5,
    lineHeight: 0.5,
    fontSize:`80px`,
    textShadow:` 4px 4px #ff0000`
}
let slikaStil={
    height:200,
    width:200
}
let inputstil={
    backgroundColor:"wheat",
    color:"red",
    height:50,
    width:600,
    fontSize: "2rem",
    
}
let priceStyle={
    fontSize:`20px`,
    color:`blue`,
    fontWeight: 0.2,

}

export default Store;