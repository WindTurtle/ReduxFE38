import React, { Component } from "react";
import { connect } from "react-redux";
class DanhSachCuoc extends Component {
  renderDanhSachCuoc = () => {
    return this.props.danhSachCuoc.map((quanCuoc, index) => {
      return (
        <div className="col-4 mt-2" key={index}>
          <button
            className="text-center"
            onClick={() => {
              this.props.datCuoc(quanCuoc);
            }}
          >
            <img
              src={quanCuoc.hinhAnh}
              style={{ width: "200px", height: "150px" }}
              alt="hello"
            />
            <br />
            <span style={{ fontSize: "50px", color: "red" }}>
              {quanCuoc.diemCuoc}
            </span>
          </button>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row text-center">{this.renderDanhSachCuoc()}</div>
      </div>
    );
  }
}

//hàm lấy giá trị state danhsachCuoc tử GameBauCuaReducer.js tạo thành props.danhSachCuoc cho component
const mapStateToProps = (state) => {
  return {
    danhSachCuoc: state.GameBauCuaReducer.danhSachCuoc,
  };
};

// hàm định nghĩa các props là phương thức đưa dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (quanCuoc) => {
      dispatch({
        type: "DAT_CUOC",
        quanCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc);
