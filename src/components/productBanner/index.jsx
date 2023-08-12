import React from "react";
import './style.scss'
import prodBanner from '../../assets/images/product-banner.jpg'

class ProductBanner extends React.Component{
    render(){
        return <div className="productBanner" style={{backgroundImage:`url(${prodBanner})`}}/>
    }
}

export default ProductBanner