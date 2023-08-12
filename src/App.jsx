import React from "react";
import "./App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import ProductList from "./components/productList";
import ProductBanner from "./components/productBanner";
import ParralaxTitle from "./components/parralaxTitle";
import MiddleBanner from "./components/middleBanner";
import MiddleDescription from "./components/middleDescription";


class App extends React.Component {
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
    </div>
    )
  }
}

export default App;
