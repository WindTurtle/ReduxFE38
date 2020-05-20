import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    let { sp } = this.props;
    return (
      <div className="card bg-dark">
        <img className="img-fluid" src={sp.hinhAnh} alt="xe" />
        <div className="card-body">
          <h4 className="card-title text-light">{sp.tenSP}</h4>
          <p className="card-text text-light">${sp.gia}</p>
          <button
            className="btn btn-success btn-block"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.xemChiTiet(sp);
            }}
          >
            Xem chi tiết
          </button>
          <button
            className="btn btn-danger btn-block"
            onClick={() => {
              this.props.themGioHang(sp);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    xemChiTiet: (sp) => {
      let action = {
        type: "XEM_CHI_TIET", // thuộc tính bắt buộc
        sanPham: sp, // giá trị gửi lên store
      };
      //dùng hàm dispatch đưa action lên store
      dispatch(action);
    },
    themGioHang: (sp) => {
      let action = {
        type: "THEM_GIO_HANG",
        sanPhamGioHang: {
          maSP: sp.maSP,
          tenSP: sp.tenSP,
          hinhAnh: sp.hinhAnh,
          gia: sp.gia,
          soLuong: 1,
        },
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPham);
