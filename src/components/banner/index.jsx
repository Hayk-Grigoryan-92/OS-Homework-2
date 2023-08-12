import React from "react";
import './style.scss'
import bannerBg from '../../assets/images/banner.jpg'

class Banner extends React.Component{
    render(){
        return (
            <div className="banner" style={{backgroundImage:`url(${bannerBg})`}}>
                <div className="banner-description">
                    <h2>CSS AND HTML IS OUR PLAYGROUND</h2>
                </div>
                <div className="banner-text">
                    <p>Con nonummy sem integer interdum volutpat dis eget eligendi aliquip dolorum magnam.</p>
                </div>
            </div>
        )
    }
}

export default Banner