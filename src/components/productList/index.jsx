import React from "react";
import "./style.scss";
import ProductBox from "../productBox";

class ProductList extends React.Component {
  state = {
    boxList: [
      {
        bgColor: "#E4A600",
        title: "UNLIMITED COLOR VARIANTS",
        icon: "icon-color",
      },
      {
        bgColor: "#00B5A6",
        title: "MANY REUSABLE ELEMENTS",
        icon: "icon-layers",
      },
      {
        bgColor: "#005881",
        title: "RESPONSIVE LAYOUT",
        icon: "icon-diamond",
      },
      {
        bgColor: "#C81010",
        title: "CLEAN MODERN CODE",
        icon: "icon-share",
      },
    ],
  };

  render() {
    return (
      <div className="productList">
        {this.state.boxList.map((item, index) => {
          return  <ProductBox
              key={index}
              icon={item.icon}
              title={item.title}
              bgColor={item.bgColor}
            />
        })}
      </div>
    );
  }
}

export default ProductList;
