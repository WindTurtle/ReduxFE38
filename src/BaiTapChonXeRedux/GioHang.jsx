import React, { Component } from "react";
import { connect } from "react-redux";
class GioHang extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>
            <img
              src={sanPham.hinhAnh}
              style={{ width: "50px", height: "40px" }}
              alt=""
            />
          </td>
          <td>{sanPham.tenSP}</td>
          <td>
            <button
              className="btn btn-info mr-2"
              onClick={() => {
                this.props.tangGiamSoLuong(sanPham.maSP, true);
              }}
            >
              +
            </button>
            {sanPham.soLuong}
            <button
              className="btn btn-info ml-2"
              onClick={() => {
                this.props.tangGiamSoLuong(sanPham.maSP, false);
              }}
            >
              -
            </button>
          </td>
          <td>${sanPham.gia.toLocaleString()}</td>
          <td>${(sanPham.soLuong * sanPham.gia).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaSanPham(sanPham.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  tinhTongTien = () => {
    return this.props.gioHang
      .reduce((tongTien, sp, index) => {
        return (tongTien += sp.gia * sp.soLuong);
      }, 0)
      .toLocaleString();
  };
  render() {
    return (
      <div className="container-fluid">
        <h3>Giỏ Hàng</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Mã SP</th>
              <th scope="col">Hình ảnh</th>
              <th scope="col">Tên SP</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Đơn giá</th>
              <th scope="col">Thành tiền</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <td colSpan="4"></td>
            <td className="text-primary">Tổng tiền: </td>
            <td className="text-danger">${this.tinhTongTien()}</td>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //state là rootReducer
  return {
    gioHang: state.GioHangReducer, // chuyển state redux thành props của component
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    xoaSanPham: (maSP) => {
      let action = {
        type: "XOA_GIO_HANG",
        maSP,
      };
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      let action = {
        type: "TANG_GIAM_SO_LUONG",
        maSP,
        tangGiam,
      };
      dispatch(action);
    },
  };
};
//biến component gioHang thành component giỏ hàng chứa props của redux
export default connect(mapStateToProps, mapDispatchToProps)(GioHang);
