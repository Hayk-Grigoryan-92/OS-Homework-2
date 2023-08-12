import React from "react";
import './style.scss'
import midBanner from '../../assets/images/paralax-img.jpg'

class MiddleBanner extends React.Component{
    render(){
        return <div className="middleBanner" style={{backgroundImage:`url(${midBanner})`}}/>
    }
}

export default MiddleBanner