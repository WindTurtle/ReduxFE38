import React, { Component } from "react";
import Burger from "../BaiTapBurger/Burger";
import Menu from "../BaiTapBurger/Menu";
class BaiTapBurger extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Burger />
          <Menu />
        </div>
      </div>
    );
  }
}

export default BaiTapBurger;
