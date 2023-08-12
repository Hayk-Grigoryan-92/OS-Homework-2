import React from "react";
import "./App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import ProductList from "./components/productList";
import ProductBanner from "./components/productBanner";
import ParralaxTitle from "./components/parralaxTitle";
import MiddleBanner from "./components/middleBanner";
import MiddleDescription from "./components/middleDescription";
import REferensesBox from "./components/referencesBox";
import refImage1 from './assets/images/refImage-1.jpg'
import refImage2 from './assets/images/refImage-2.jpg'
import refImage3 from './assets/images/refImage-3.jpg'
import refImage4 from './assets/images/refImage-4.jpg'


class App extends React.Component {

  state={
    refBox:[
      {
        bgImage: refImage1
      },
      {
        bgImage:refImage2
      },
      {
        bgImage:refImage3
      },
      {
        bgImage: refImage4
      }
    ]
  }

  render() {
    return (
    <div className="App">
      <Header/>
      <Banner/>
      <div className="products-section">
       <ProductList/>
       <ProductBanner/>
      </div>
      <ParralaxTitle/>
      <div className="middleSection">
        <MiddleBanner/>
        <MiddleDescription/>
      </div>
      <p>TOP <b>REFERENCES</b></p>
      <div className="references-container">
        {this.state.refBox.map((item, index)=>{
          return <REferensesBox key={index} item={item.bgImage}/>
        })}
      </div>

    </div>
    )
  }
}

export default App;
