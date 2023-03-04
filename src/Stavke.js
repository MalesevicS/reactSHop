import React, { Component } from "react";

class Stavke extends Component{

    constructor(props){
        super(props)

        this.kreirajListItem=this.kreirajListItem.bind(this)
    }


kreirajListItem(item){
    return <li key={item.key} onClick={()=>this.props.brisi(item.key)}>{item.text}</li>
}
    render(){

        let stringLista=this.props.ulaz.map(this.kreirajListItem)

        return(

            <ul>
                {stringLista}
            </ul>

        )



    }




}
export default Stavke