import React from "react";
import "./style.scss";

class MiddleDescription extends React.Component {
  render() {
    return (
      <div className="middle-description">
        <h2>
          Nonummy nibh euismod tincidunt ut laoreet massa nec orci accusamus
          auctor aute
        </h2>
        <ul>
            <li>Sed diam nonummy nibh euismod tincidunt ut laoreet</li>
            <li>Dolore magna aliquam erat volutpat</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
            <li>Sed diam nonummy nibh euismod tincidunt ut laoreet</li>
            <li>Dolore magna aliquam erat volutpat</li>
        </ul>
      </div>
    );
  }
}

export default MiddleDescription