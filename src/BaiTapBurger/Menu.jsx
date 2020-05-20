import React, { Component } from "react";
import { connect } from "react-redux";
class Menu extends Component {
  renderMenu = () => {
    let { menu, burger } = this.props;
    let content = [];
    for (let item in menu) {
      let form = [];
      form.push(
        <tr key={menu[item]}>
          <td>{item}</td>
          <td>
            <button
              className="btn btn-success mr-2"
              onClick={() => {
                this.props.addTopping(item, 1);
              }}
            >
              +
            </button>
            {burger[item]}
            <button
              className="btn btn-danger ml-2"
              onClick={() => {
                this.props.addTopping(item, -1);
              }}
            >
              -
            </button>
          </td>
          <td>${menu[item]}</td>
          <td>${menu[item] * burger[item]}</td>
        </tr>
      );
      content.push(form);
    }
    return content;
  };
  render() {
    return (
      <div className="col-5">
        <h3>Chọn topping</h3>
        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Thức ăn</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Giá</th>
                <th scope="col">Thành tiền</th>
              </tr>
            </thead>
            <tbody>{this.renderMenu()}</tbody>
            <tfoot>
              <tr className="font-weight-bold">
                <td colSpan="3" className="text-right">
                  Tổng tiền:
                </td>
                <td>${this.props.total}</td>
              </tr>
              <tr>
                <td colSpan="4" className="text-right">
                  <button className="btn btn-block btn-warning">
                    THANH TOÁN
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTopping: (item, amount) => {
      dispatch({ type: "ADD_TOPPING", item, amount });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
