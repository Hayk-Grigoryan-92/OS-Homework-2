import React from "react";
import "./style.scss";

class ProductBox extends React.Component{
  render(){
    return <div className="productBox" style={{backgroundColor:this.props.bgColor}}>
      <i className={`${this.props.icon} box-icon`}/>
      <p>{this.props.title}</p>
    </div>
  }
}

export default ProductBox;