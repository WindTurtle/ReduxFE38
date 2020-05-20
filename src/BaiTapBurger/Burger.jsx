import React, { Component } from "react";
import "../BaiTapBurger/css/Burger.css";
import { connect } from "react-redux";
class Burger extends Component {
  renderBreadMid = () => {
    let { burger } = this.props;
    let content = [];
    for (let burgerProps in burger) {
      let breadMid = [];
      for (let i = 0; i < burger[burgerProps]; i++) {
        breadMid.push(<div key={i} className={burgerProps}></div>);
      }
      content.push(breadMid);
    }
    return content;
  };
  render() {
    return (
      <div className="col-7">
        <div className="breadTop"></div>
        {this.renderBreadMid()}
        <div className="breadBottom"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
  };
};
export default connect(mapStateToProps, null)(Burger);
