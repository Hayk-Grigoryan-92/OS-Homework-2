import React from "react";
import './style.scss'

class REferensesBox extends React.Component{
    render(){
        return <div className="referencesBox" style={{backgroundImage:`url(${this.props.item})`}}></div>
    }
}

export default REferensesBox