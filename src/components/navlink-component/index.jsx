import React from "react";
import './style.scss'

class Navlink extends React.Component{
    render(){
        return(
            <div>
                <a>{this.props.title}</a>
            </div>
        )
    }
}

export default Navlink