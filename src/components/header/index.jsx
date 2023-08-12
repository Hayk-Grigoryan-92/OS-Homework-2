import React from "react";
import "./style.scss";
import logo from "../../assets/images/cube-11.jpg";
import Navlink from "../navlink-component";

class Header extends React.Component {

    state = {
        navbar: [
            {
                title: 'HOME'
            },
            {
                title: 'ABOUT US'
            },
            {
                title: 'SERVICES'
            },
            {
                title: 'GALLERY'
            },
            {
                title: 'CONTACT'
            }

        ]
    }

  render() {
    return (
      <>
        <div className="header">
          <div
            className="logo"
            style={{ backgroundImage: `url(${logo})`}}>
        </div>

          <div className="header-nav">
            <div className="navbar">
                {this.state.navbar.map((item, index)=>{
                    return <Navlink key={index}
                                    title={item.title}/>
                })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
